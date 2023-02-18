import { MessageType } from '../../types/messageType';

import * as S from './styles';

type Props = {
  message: MessageType;
  $isSent: boolean;
};

export const Message = ({ message, $isSent }: Props) => {
  const linkify = (text: string) => {
    const regex = /(https?:\/\/[^\s]+)/g;

    const words = text.split(' ');

    return words.map((word, index) => {
      return word.match(regex) ? (
        <a
          key={index}
          href={word}
          target="_blank"
          rel="noreferrer"
          style={{ color: '#50e1c8' }}
        >
          {word}
        </a>
      ) : (
        ` ${word} `
      );
    });
  };

  return (
    <S.Container>
      <S.Box $isSent={$isSent}>
        <S.Info>{message.name}</S.Info>
        <S.Text>{linkify(message.text)}</S.Text>
        <S.Info>{message.timestamp}</S.Info>
      </S.Box>
    </S.Container>
  );
};
