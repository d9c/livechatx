import React, { useContext } from "react";

import * as S from "./styles";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

export const JoinRoom = ({ setShowChat }) => {
  const { socket, name, setName, room, setRoom } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !room.trim()) {
      if (!name.trim()) setName("");
      if (!room.trim()) setRoom("");
      return false;
    }

    socket.emit("joinRoom", { name, room });

    socket.on("response", (data) => {
      if (data.status === "success") {
        setShowChat(true);
      }

      if (data.status === "error") {
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
