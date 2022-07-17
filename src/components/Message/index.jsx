import React from "react";

import * as C from "./styles";

export const Message = ({ message, time, author, sent }) => {
  return (
    <C.Message>
      <C.Content sent={sent}>
        <span>{message}</span>
      </C.Content>
      <C.Info>
        <C.Time>{time}</C.Time>
        <C.Author>{author}</C.Author>
      </C.Info>
    </C.Message>
  );
};
