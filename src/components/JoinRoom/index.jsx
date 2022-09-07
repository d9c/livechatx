import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./styles";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

export const JoinRoom = () => {
  const { socket, name, setName, room, setRoom } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !room.trim()) {
      if (!name.trim()) setName("");
      if (!room.trim()) setRoom("");
      return;
    }

    socket.emit("joinRoom", { name, room }, (error) => {
      if (error) {
        return setSnackbar({
          open: true,
          message: error,
        });
      }

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
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <S.TextInput
          type="text"
          placeholder="Room"
          maxLength={20}
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <S.Button type="submit">Join</S.Button>
      </form>
    </S.Container>
  );
};
