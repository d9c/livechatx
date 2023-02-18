import styled from 'styled-components';
import { ThemeType } from '../../types/themeType';

type Props = {
  theme: ThemeType;
  $isSent: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Box = styled.div<Props>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;

  background-color: ${(props) =>
    props.$isSent ? props.theme.message.sent : props.theme.message.received};

  border-radius: 4px;

  padding: 7px;

  &:after {
    position: absolute;
    top: 50%;
    left: ${(props) => (props.$isSent ? '100%' : '')};
    right: ${(props) => (!props.$isSent ? '100%' : '')};

    content: '';

    border: solid transparent;
    border-width: 10px;
    border-left-color: ${(props) =>
      props.$isSent ? props.theme.message.sent : ''};
    border-right-color: ${(props) =>
      !props.$isSent ? props.theme.message.received : ''};

    width: 0;
    height: 0;

    margin-top: -10px;

    pointer-events: none;
  }
`;

export const Text = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  word-break: break-all;
`;

export const Info = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};

  filter: opacity(70%);
`;
