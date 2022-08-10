import React from "react";

import * as S from "./styles";

export const Message = ({ username, text, timestamp, $isSent }) => {
  return (
    <S.Container>
      <S.Content $isSent={$isSent}>
        <S.Info $isSent={$isSent}>{username}</S.Info>
        <S.Message>{text}</S.Message>
        <S.Info $isSent={$isSent}>{timestamp}</S.Info>
      </S.Content>
    </S.Container>
  );
};
