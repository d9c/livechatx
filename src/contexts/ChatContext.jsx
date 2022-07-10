import React, { createContext, useState } from "react";
import io from "socket.io-client";

export const ChatContext = createContext({});

const socket = io.connect("https://d9c-livechat-backend.herokuapp.com");

export const ChatContextProvider = ({ children }) => {
  const [showChat, setShowChat] = useState(false);
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  return (
    <ChatContext.Provider
      value={{
        socket,
        showChat,
        setShowChat,
        username,
        setUsername,
        room,
        setRoom,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
