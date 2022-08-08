import React from "react";

import * as S from "./styles";

export const Message = ({ sent, message, time, author }) => {
  return (
    <S.Container>
      <S.Content sent={sent}>
        <S.Info sent={sent}>{author}</S.Info>
        <S.Message>{message}</S.Message>
        <S.Info sent={sent}>{time}</S.Info>
      </S.Content>
    </S.Container>
  );
};
