import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Send as SendIcon } from "@mui/icons-material";

import * as S from "./styles";

import { Message } from "../Message";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

export const Chat = () => {
  const { socket, name, room } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const navigate = useNavigate();
  const divRef = useRef(null);

  useEffect(() => {
    if (!name || !room) return navigate("/");

    socket.on("receiveMessage", (message) => {
      setMessageList((prevMessageList) => [...prevMessageList, message]);
    });

    socket.on("userJoined", (name) => {
      setSnackbar({
        open: true,
        message: `${name} joined the room.`,
      });
    });

    socket.on("userLeft", (name) => {
      setSnackbar({
        open: true,
        message: `${name} left the room.`,
      });
    });

    return () => {
      socket.off("receiveMessage");
      socket.off("userJoined");
      socket.off("userLeft");
    };
  }, []);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messageList]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!currentMessage.trim()) {
      setCurrentMessage("");
      return false;
    }

    socket.emit("sendMessage", currentMessage, () => {
      setCurrentMessage("");
    });
  };

  return (
    <S.Container>
      <S.Header>
        <S.Room>
          <S.Span>Room</S.Span>
          <S.RoomName>{room}</S.RoomName>
        </S.Room>
      </S.Header>
      <S.Body>
        {messageList.map((message, index) => (
          <S.MessageRow
            key={index}
            $isSent={message.name === name ? true : false}
          >
            <Message
              name={message.name}
              text={message.text}
              timestamp={message.timestamp}
              $isSent={message.name === name ? true : false}
            />
          </S.MessageRow>
        ))}
        <div ref={divRef} />
      </S.Body>
      <S.Footer>
        <form onSubmit={handleSubmit}>
          <S.WriteMessage>
            <S.TextInput
              type="text"
              placeholder="Message"
              maxLength={160}
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <S.SendButton type="submit">
              <SendIcon sx={{ color: "#ffffff" }} />
            </S.SendButton>
          </S.WriteMessage>
        </form>
      </S.Footer>
    </S.Container>
  );
};
