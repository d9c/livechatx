import React, { createContext, useState, useEffect } from "react";
import io from "socket.io-client";

export const ChatContext = createContext({});

const socket = io.connect("http://localhost:4000");

export const ChatContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [userList, setUserList] = useState([]);
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    socket.on("roomData", (data) => {
      setUserList(data);
    });
  }, []);

  console.log("userList:", userList);

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
        showChat,
        setShowChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
