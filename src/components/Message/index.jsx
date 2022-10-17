import React from "react";

import * as S from "./styles";

export const Message = ({ name, text, timestamp, $isSent }) => {
  const linkify = (text) => {
    const urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

    const words = text.split(" ");

    return words.map((word, index) => {
      return word.match(urlRegex) ? (
        <a key={index} href={word} target="_blank" style={{ color: "#50e1c8" }}>
          {word}
        </a>
      ) : (
        ` ${word} `
      );
    });
  };

  return (
    <S.Container>
      <S.Content $isSent={$isSent}>
        <S.Info $isSent={$isSent}>{name}</S.Info>
        <S.Message>{linkify(text)}</S.Message>
        <S.Info $isSent={$isSent}>{timestamp}</S.Info>
      </S.Content>
    </S.Container>
  );
};
