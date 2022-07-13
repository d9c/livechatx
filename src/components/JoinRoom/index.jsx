import React, { useContext } from "react";

import { ChatContext } from "../../contexts/ChatContext";

import * as Styled from "./styles";

export const JoinRoom = () => {
  const { socket, setShowChat, setUsername, room, setRoom } =
    useContext(ChatContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await socket.emit("join_room", room);
    setShowChat(true);
  };

  return (
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.TextInput
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <Styled.TextInput
        type="text"
        placeholder="Room ID"
        onChange={(e) => setRoom(e.target.value)}
        required
      />
      <Styled.Button type="submit">
        <span>Join</span>
      </Styled.Button>
    </Styled.Form>
  );
};
