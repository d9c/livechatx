import React, { useContext } from "react";

import * as S from "./styles";

import { ChatContext } from "../../contexts/ChatContext";

export const JoinRoom = () => {
  const { socket, username, setUsername, room, setRoom, setShowChat } =
    useContext(ChatContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      room: room,
    };

    await socket.emit("join_room", data);

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
          placeholder="Room"
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <S.Button type="submit">Join</S.Button>
      </form>
    </S.Container>
  );
};
