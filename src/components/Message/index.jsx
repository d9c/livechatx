import React from "react";

import * as Styled from "./styles";

export const Message = ({ message, time, author, sent }) => {
  return (
    <Styled.Container>
      <Styled.MessageContent sent={sent}>
        <span>{message}</span>
      </Styled.MessageContent>
      <Styled.MessageInfo>
        <Styled.MessageTime>{time}</Styled.MessageTime>
        <Styled.MessageAuthor>{author}</Styled.MessageAuthor>
      </Styled.MessageInfo>
    </Styled.Container>
  );
};
