import { useContext, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { Message } from '../Message';

import { ChatContext } from '../../contexts/ChatContext';
import { SnackbarContext } from '../../contexts/SnackbarContext';

import { MessageType } from '../../types/messageType';

import * as S from './styles';

export const Chat = () => {
  const { socket, userSettings } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const [messageList, setMessageList] = useState<MessageType[]>([]);

  const messageRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userSettings.name || !userSettings.room) {
      return navigate('/');
    }

    socket?.on('newMessage', (message: MessageType) => {
      setMessageList((prevMessageList) => [...prevMessageList, message]);
    });

    socket?.on('userJoined', (message: string) => {
      setSnackbar({
        open: true,
        message,
      });
    });

    socket?.on('userLeft', (message: string) => {
      setSnackbar({
        open: true,
        message,
      });
    });

    return () => {
      socket?.off('newMessage');
      socket?.off('userJoined');
      socket?.off('userLeft');
    };
  }, []);

  useEffect(() => {
    divRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messageList]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message: string | undefined = messageRef.current?.value;

    if (!message) {
      return false;
    }

    if (!message.trim()) {
      if (messageRef.current) {
        messageRef.current.value = '';
      }
      return false;
    }

    socket?.emit('sendMessage', message, () => {
      if (messageRef.current) {
        messageRef.current.value = '';
      }
    });
  };

  return (
    <S.Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.Header>
        <S.Span>Room</S.Span>
        <S.RoomBadge>
          <S.Span>{userSettings.room}</S.Span>
        </S.RoomBadge>
      </S.Header>
      <S.Body>
        {messageList.map((message, index) => (
          <S.MessageRow
            key={index}
            $isSent={message.name === userSettings.name ? true : false}
          >
            <Message
              message={message}
              $isSent={message.name === userSettings.name ? true : false}
            />
          </S.MessageRow>
        ))}
        <div ref={divRef} />
      </S.Body>
      <S.Footer>
        <form onSubmit={handleSubmit}>
          <S.WriteMessage>
            <S.TextInput
              type="text"
              placeholder="Message"
              maxLength={160}
              ref={messageRef}
              as={motion.input}
              whileFocus={{ scale: 1.05 }}
            />
            <S.SendButton
              type="submit"
              as={motion.button}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <S.SendIcon />
            </S.SendButton>
          </S.WriteMessage>
        </form>
      </S.Footer>
    </S.Container>
  );
};
