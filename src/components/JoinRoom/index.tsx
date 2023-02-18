import { useContext, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ChatContext } from '../../contexts/ChatContext';
import { SnackbarContext } from '../../contexts/SnackbarContext';

import * as S from './styles';

export const JoinRoom = () => {
  const { socket, setUserSettings } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const nameRef = useRef<HTMLInputElement>(null);
  const roomRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name: string | undefined = nameRef.current?.value;
    const room: string | undefined = roomRef.current?.value;

    if (!name || !room) {
      return false;
    }

    if (!name.trim() || !room.trim()) {
      if (nameRef.current) {
        nameRef.current.value = '';
      }

      if (roomRef.current) {
        roomRef.current.value = '';
      }

      return false;
    }

    socket?.emit('joinRoom', { name, room }, (error: string) => {
      if (error) {
        return setSnackbar({
          open: true,
          message: error,
        });
      }

      setUserSettings({
        name,
        room,
      });

      navigate('/chat');
    });
  };

  return (
    <S.Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form onSubmit={handleSubmit}>
        <S.TextInput
          type="text"
          placeholder="Name"
          maxLength={20}
          ref={nameRef}
        />
        <S.TextInput
          type="text"
          placeholder="Room"
          maxLength={20}
          ref={roomRef}
        />
        <S.Button type="submit">Join</S.Button>
      </form>
    </S.Container>
  );
};
