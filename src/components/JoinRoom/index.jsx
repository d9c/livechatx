import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

import * as S from "./styles";

export const JoinRoom = () => {
  const { socket, setName, setRoom } = useContext(ChatContext);
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

      setName(name);
      setRoom(room);

      navigate("/chat");
    });
  };

  return (
    <S.Container>
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
