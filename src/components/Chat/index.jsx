import React, { useContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Message } from "../Message";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

import * as S from "./styles";

export const Chat = () => {
  const { socket, userSettings } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const [messageList, setMessageList] = useState([]);

  const messageRef = useRef();
  const divRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    if (!userSettings.name || !userSettings.room) return navigate("/");

    socket.on("newMessage", (message) => {
      setMessageList((prevMessageList) => [...prevMessageList, message]);
    });

    socket.on("userJoined", (message) => {
      setSnackbar({
        open: true,
        message,
      });
    });

    socket.on("userLeft", (message) => {
      setSnackbar({
        open: true,
        message,
      });
    });

    return () => {
      socket.off("newMessage");
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }, []);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = messageRef.current.value;

    if (!message.trim()) {
      messageRef.current.value = "";
      return false;
    }

    socket.emit("sendMessage", message, () => {
      messageRef.current.value = "";
    });
  };

  return (
    <S.Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.Header>
        <S.Room>
          <S.Span>Room</S.Span>
          <S.RoomName>{userSettings.room}</S.RoomName>
        </S.Room>
      </S.Header>
      <S.Body>
        {messageList.map((message, index) => (
          <S.MessageRow
            key={index}
            $isSent={message.name === userSettings.name ? true : false}
          >
            <Message
              name={message.name}
              text={message.text}
              timestamp={message.timestamp}
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
