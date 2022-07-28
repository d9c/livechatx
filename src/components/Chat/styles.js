import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.main.border};
  border-radius: 5px;

  width: 50%;
  height: 90%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: ${(props) => props.theme.main.secondary};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  height: 60px;
  padding: 10px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme.text.primary};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: ${(props) => props.theme.main.primary};

  height: 100%;
  padding: 10px;

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
  justify-content: ${(props) => (props.sent ? "right" : "left")};
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.main.secondary};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

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
  color: ${(props) => props.theme.text.primary};

  background-color: ${(props) => props.theme.main.background};
  border: 1px solid ${(props) => props.theme.main.border};
  border-radius: 5px;

  width: 200px;
  height: 35px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.main.focus};
    transition: 100ms ease-in-out;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.message.sent};
  border: none;
  border-radius: 5px;

  width: 30px;
  height: 30px;
  padding: 5px;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(80%);
    transition: 100ms ease-in-out;
  }
`;
