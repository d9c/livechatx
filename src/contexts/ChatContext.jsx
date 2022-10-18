import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const ChatContext = createContext({});

const backendUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://livechat-backend.up.railway.app";
const socket = io.connect(backendUrl);

export const ChatContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    socket.on("roomData", (users) => setUserList(users));

    return () => {
      socket.off("roomData");
    };
  }, []);

  return (
    <ChatContext.Provider
      value={{
        socket,
        name,
        setName,
        room,
        setRoom,
        userList,
        setUserList,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
