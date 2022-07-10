import React, { useContext } from "react";

import { ChatContext } from "../contexts/ChatContext";

import "../styles/join-room.scss";

export const JoinRoom = () => {
  const { socket, setShowChat, setUsername, room, setRoom } =
    useContext(ChatContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await socket.emit("join_room", room);
    setShowChat(true);
  };

  return (
    <div className="join-room">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Room ID"
          onChange={(e) => setRoom(e.target.value)}
          required
        />
        <button type="submit">
          <span>Join</span>
        </button>
      </form>
    </div>
  );
};
