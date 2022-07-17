import React, { useContext } from "react";

import { ChatContext } from "../../contexts/ChatContext";

import * as C from "./styles";

export const JoinRoom = () => {
  const { socket, setShowChat, setUsername, room, setRoom } =
    useContext(ChatContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await socket.emit("join_room", room);
    setShowChat(true);
  };

  return (
    <C.Form onSubmit={handleSubmit}>
      <C.TextInput
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <C.TextInput
        type="text"
        placeholder="Room ID"
        onChange={(e) => setRoom(e.target.value)}
        required
      />
      <C.Button type="submit">Join</C.Button>
    </C.Form>
  );
};
