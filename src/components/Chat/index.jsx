import React, { useContext, useState, useEffect, useRef } from "react";

import { Message } from "../Message";

import { ChatContext } from "../../contexts/ChatContext";

import * as C from "./styles";

export const Chat = () => {
  const { socket, username, room } = useContext(ChatContext);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const divRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prevMessageList) => [...prevMessageList, data]);
    });
  }, [socket]);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentMessage.trim()) {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time: getCurrentTime(),
      };

      await socket.emit("send_message", messageData);

      setMessageList((prevMessageList) => [...prevMessageList, messageData]);
      setCurrentMessage("");
    } else {
      setCurrentMessage("");
      return false;
    }
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <C.Chat>
      <C.Header>
        <span>Username: {username}</span>
        <span>Room: {room}</span>
      </C.Header>
      <C.Body>
        {messageList.map((msg) => (
          <C.MessageRow sent={msg.author === username ? true : false}>
            <Message
              message={msg.message}
              time={msg.time}
              author={msg.author}
              sent={msg.author === username ? true : false}
            />
          </C.MessageRow>
        ))}
        <div ref={divRef} style={{ visibility: "hidden" }} />
      </C.Body>
      <C.Footer>
        <form onSubmit={handleSubmit}>
          <C.WriteMessage>
            <C.TextInput
              type="text"
              placeholder="Message"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <C.SendButton type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#ffffff" d="M2,21L23,12L2,3V10L17,12L2,14V21Z" />
              </svg>
            </C.SendButton>
          </C.WriteMessage>
        </form>
      </C.Footer>
    </C.Chat>
  );
};
