import styled from "styled-components";
import { Box as MuiBox } from "@mui/material";

export const Container = styled(MuiBox).attrs({
  sx: { boxShadow: 2 },
})`
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

  background-color: ${(props) => props.theme.container.secondary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  height: 60px;
  padding: 10px;
`;

export const Room = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Span = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};
`;

export const RoomName = styled.span`
  text-align: center;

  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};

  background-color: ${(props) => props.theme.focus};
  border-radius: 4px;

  min-width: 24px;
  height: 24px;

  padding: 5px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${(props) => props.theme.container.primary};

  height: 100%;
  padding: 10px 10px 0px 10px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888888;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
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
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  background-color: ${(props) => props.theme.container.secondary};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  width: 200px;
  height: 35px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.focus};
    transition: 100ms ease-in-out;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.message.primary};
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
