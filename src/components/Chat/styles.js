import styled from "styled-components";
import { Send as MuiSendIcon } from "@mui/icons-material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  width: 100%;
  height: 80%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: ${(props) => props.theme.container.header};

  border-bottom: 1px solid ${(props) => props.theme.border};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  height: 60px;

  padding: 10px;
`;

export const Room = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Span = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};
`;

export const RoomName = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.text};

  background-color: ${(props) => props.theme.border};

  border-radius: 4px;

  min-width: 24px;
  height: 24px;

  padding: 5px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${(props) => props.theme.container.body};

  height: 100%;

  padding: 20px 20px 0px 20px;

  overflow-x: hidden;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #646464;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #747474;
  }
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) => (props.$isSent ? "right" : "left")};

  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.container.primary};

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
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  background-color: ${(props) => props.theme.container.header};

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  width: 200px;
  height: 35px;

  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid #ffffff;
    transition: 100ms ease-in-out;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.border};

  border: none;
  border-radius: 4px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(80%);
    transition: 100ms ease-in-out;
  }
`;

export const SendIcon = styled(MuiSendIcon)`
  && {
    color: ${(props) => props.theme.text};
  }
`;
