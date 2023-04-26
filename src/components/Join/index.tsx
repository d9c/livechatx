'use client';

import { useContext, useRef, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import NProgress from 'nprogress';

import { ChatContext } from '@/contexts/ChatContext';
import { SnackbarContext } from '@/contexts/SnackbarContext';

import * as S from './styles';

export const Join = () => {
  const { socket, setUserSettings } = useContext(ChatContext);
  const { setSnackbar } = useContext(SnackbarContext);

  const router = useRouter();
  const searchParams = useSearchParams();

  const nameRef = useRef<HTMLInputElement>(null);
  const roomRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const roomId = searchParams.get('room');

    if (roomId && roomRef.current) {
      roomRef.current.value = roomId;
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const name = nameRef.current?.value.trim();
    const room = roomRef.current?.value.trim();

    if (name && room) {
      NProgress.start();

      socket?.emit('joinRoom', { name, room }, (error: string) => {
        if (error) {
          setSnackbar({
            open: true,
            message: error,
          });
          NProgress.done();
          return;
        }

        setUserSettings({
          name,
          room,
        });

        router.push('/chat');
      });
    }
  };

  return (
    <S.Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <form onSubmit={handleSubmit}>
        <S.TextInput
          type="text"
          placeholder="Name"
          maxLength={20}
          ref={nameRef}
        />
        <S.TextInput
          type="text"
          placeholder="Room"
          maxLength={20}
          ref={roomRef}
        />
        <S.Button type="submit">Join</S.Button>
      </form>
    </S.Container>
  );
};
