import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const ChatContext = createContext({});

const socket = io.connect("https://d9c-livechat-backend.herokuapp.com");

export const ChatContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    socket.on("roomData", (data) => {
      setUserList(data);
    });
  }, []);

  return (
    <ChatContext.Provider
      value={{
        socket,
        username,
        setUsername,
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
