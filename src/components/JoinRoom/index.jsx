import React, { useContext } from "react";

import * as S from "./styles";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

export const JoinRoom = () => {
  const { socket, username, setUsername, room, setRoom, setShowChat } =
    useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    socket.emit("joinRoom", { username, room });

    socket.on("response", (data) => {
      if (data.type === "success") {
        setShowChat(true);
      }

      if (data.type === "error") {
        setSnackbar({
          open: true,
          message: data.message,
        });
      }
    });
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.TextInput
          type="text"
          placeholder="Username"
          maxLength={20}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <S.TextInput
          type="text"
          placeholder="Room"
          maxLength={20}
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <S.Button type="submit">Join</S.Button>
      </form>
    </S.Container>
  );
};
