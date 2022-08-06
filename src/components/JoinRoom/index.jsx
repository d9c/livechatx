import React, { useContext } from "react";

import * as S from "./styles";

import { ChatContext } from "../../contexts/ChatContext";

export const JoinRoom = () => {
  const { socket, setShowChat, setUsername, room, setRoom } =
    useContext(ChatContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await socket.emit("join_room", room);
    setShowChat(true);
  };

  return (
    <S.Container>
      <form onSubmit={handleSubmit}>
        <S.TextInput
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <S.TextInput
          type="text"
          placeholder="Room ID"
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <S.Button type="submit">Join</S.Button>
      </form>
    </S.Container>
  );
};
