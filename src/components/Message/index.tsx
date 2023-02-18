import { motion } from 'framer-motion';

import { MessageType } from '../../types/messageType';

import * as S from './styles';

type Props = {
  message: MessageType;
  $isSent: string;
};

export const Message = ({ message, $isSent }: Props) => {
  const linkify = (text: string) => {
    const urlRegex =
      /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;

    const words = text.split(' ');

    return words.map((word, index) => {
      return word.match(urlRegex) ? (
        <a key={index} href={word} target="_blank" style={{ color: '#50e1c8' }}>
          {word}
        </a>
      ) : (
        ` ${word} `
      );
    });
  };

  return (
    <S.Container
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <S.Box $isSent={$isSent}>
        <S.Info>{message.name}</S.Info>
        <S.Text>{linkify(message.text)}</S.Text>
        <S.Info>{message.timestamp}</S.Info>
      </S.Box>
    </S.Container>
  );
};
