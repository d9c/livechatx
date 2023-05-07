'use client';

import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { ChatContext } from '@/contexts/chat-context';

import { ChatBox } from '@/components/chat-box';
import { UserList } from '@/components/user-list';

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
