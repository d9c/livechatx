import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const ChatContext = createContext({});

const socket = io.connect("https://d9c-livechat-backend.herokuapp.com");

export const ChatContextProvider = ({ children }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    socket.on("roomData", (users) => setUserList(users));
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
