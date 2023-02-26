'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ChatContext } from '@/contexts/ChatContext';

import { ChatBox } from '@/components/ChatBox';
import { UserList } from '@/components/UserList';

import * as S from './styles';

export default function Chat() {
  const { userSettings } = useContext(ChatContext);

  const router = useRouter();

  if (!userSettings.name || !userSettings.room) {
    return <S.Button onClick={() => router.push('/')}>Join a Room</S.Button>;
  }

  return (
    <S.Wrapper>
      <ChatBox />
      <UserList />
    </S.Wrapper>
  );
}
