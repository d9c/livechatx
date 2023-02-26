'use client';

import styled from 'styled-components';

import { ChatBox } from '@/components/ChatBox';
import { UserList } from '@/components/UserList';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 65%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    padding: 10px;
  }
`;

export default function Chat() {
  return (
    <Wrapper>
      <ChatBox />
      <UserList />
    </Wrapper>
  );
}
