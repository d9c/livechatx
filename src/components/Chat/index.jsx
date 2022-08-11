import React, { useContext, useState, useEffect, useRef } from "react";
import { Send as SendIcon } from "@mui/icons-material";

import * as S from "./styles";

import { Message } from "../Message";

import { ChatContext } from "../../contexts/ChatContext";
import { SnackbarContext } from "../../contexts/SnackbarContext";

export const Chat = () => {
  const { socket, room, username } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("receiveMessage", (data) => {
      setMessageList((prevMessageList) => [...prevMessageList, data]);
    });

    socket.on("userJoined", (data) => {
      setSnackbar({
        open: true,
        message: `${data} joined the room.`,
      });
    });

    socket.on("userLeft", (data) => {
      setSnackbar({
        open: true,
        message: `${data} left the room.`,
      });
    });
  }, []);

  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setMessage("");
      return false;
    }

    socket.emit("sendMessage", message);

    setMessage("");
  };

  const Messages = messageList.map((message, index) => (
    <S.MessageRow
      key={index}
      $isSent={message.username === username ? true : false}
    >
      <Message
        username={message.username}
        text={message.text}
        timestamp={message.timestamp}
        $isSent={message.username === username ? true : false}
      />
    </S.MessageRow>
  ));

  return (
    <S.Container>
      <S.Header>
        <S.Room>
          <S.Span>Room</S.Span>
          <S.RoomName>{room}</S.RoomName>
        </S.Room>
      </S.Header>
      <S.Body>
        {Messages}
        <div ref={divRef} style={{ visibility: "hidden" }} />
      </S.Body>
      <S.Footer>
        <form onSubmit={handleSubmit}>
          <S.WriteMessage>
            <S.TextInput
              type="text"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
