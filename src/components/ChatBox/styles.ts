import styled from 'styled-components';
import Send from '@mui/icons-material/Send';

type Props = {
  $isSent: boolean;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.border.main};
  border-radius: 4px;

  width: 100%;
  height: 80%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border-bottom: 1px solid ${(props) => props.theme.border.main};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  height: 60px;

  padding: 10px;
`;

export const Span = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};
`;

export const RoomBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.button.main};

  border-radius: 4px;

  min-width: 24px;
  height: 24px;

  padding: 5px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;

  padding: 20px 20px 0px 20px;

  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #646464;

    &:hover {
      background-color: #747474;
    }
  }
`;

export const MessageRow = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => (props.$isSent ? 'right' : 'left')};

  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  height: 50px;

  padding: 10px;
`;

export const WriteMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextInput = styled.input`
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  background-color: ${(props) => props.theme.background};

  border: 1px solid ${(props) => props.theme.border.main};
  border-radius: 4px;

  width: 200px;
  height: 35px;

  padding: 5px;

  &:hover {
    outline: none;
    border: 1px solid ${(props) => props.theme.border.hover};
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.border.hover};
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.button.main};

  border: none;
  border-radius: 4px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.button.hover};
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

export const SendIcon = styled(Send)`
  && {
    color: ${(props) => props.theme.text};
  }
`;
