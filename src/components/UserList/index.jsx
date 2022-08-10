import React, { useContext } from "react";

import * as S from "./styles";

import { ChatContext } from "../../contexts/ChatContext";

export const UserList = () => {
  const { userList } = useContext(ChatContext);

  const Users = userList.map((user) => (
    <S.User>
      <span style={{ color: "#80ff80" }}>•</span>
      <S.Span>{user.username}</S.Span>
    </S.User>
  ));

  return (
    <S.Container>
      <S.Header>
        <S.Span>Connected Users</S.Span>
      </S.Header>
      <S.Body>{Users}</S.Body>
    </S.Container>
  );
};
