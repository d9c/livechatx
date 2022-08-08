import React, { createContext, useState } from "react";
import io from "socket.io-client";

export const ChatContext = createContext({});

const socket = io.connect("https://d9c-livechat-backend.herokuapp.com");

export const ChatContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  return (
    <ChatContext.Provider
      value={{
        socket,
        username,
        setUsername,
        room,
        setRoom,
        showChat,
        setShowChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
