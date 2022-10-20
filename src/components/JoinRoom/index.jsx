import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

import * as S from "./styles";

export const JoinRoom = () => {
  const { socket, setUserSettings } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const nameRef = useRef();
  const roomRef = useRef();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const room = roomRef.current.value;

    if (!name.trim() || !room.trim()) {
      nameRef.current.value = "";
      roomRef.current.value = "";
      return false;
    }

    socket.emit("joinRoom", { name, room }, (error) => {
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

      navigate("/chat");
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
          as={motion.input}
          whileFocus={{ scale: 1.05 }}
        />
        <S.TextInput
          type="text"
          placeholder="Room"
          maxLength={20}
          ref={roomRef}
          as={motion.input}
          whileFocus={{ scale: 1.05 }}
        />
        <S.Button
          type="submit"
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Join
        </S.Button>
      </form>
    </S.Container>
  );
};
