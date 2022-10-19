import React, { useContext } from "react";
import { motion } from "framer-motion";

import { ChatContext } from "../../contexts/ChatContext";

import * as S from "./styles";

export const UserList = () => {
  const { userList } = useContext(ChatContext);

  return (
    <S.Container as={motion.div} initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <S.Header>
        <S.Span>Connected Users</S.Span>
      </S.Header>
      <S.Body>
        {userList.map((user, index) => (
          <S.User key={index}>
            <S.Span style={{ color: "#80ff80" }}>•</S.Span>
            <S.Span>{user.name}</S.Span>
          </S.User>
        ))}
      </S.Body>
    </S.Container>
  );
};
