import React from "react";

import * as S from "./styles";

export const Message = ({ sent, message, time, author }) => {
  return (
    <S.Container>
      <S.Row sent={sent}>
        <S.Content sent={sent}>
          <span>{message}</span>
        </S.Content>
      </S.Row>
      <S.Row sent={sent}>
        <S.Info>
          <S.Time>{time}</S.Time>
          <S.Author>{author}</S.Author>
        </S.Info>
      </S.Row>
    </S.Container>
  );
};
