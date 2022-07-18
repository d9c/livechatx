import styled from "styled-components";

// Body Background:  rgb(30, 30, 35) / #1e1e23
// Chat Body:        rgb(50, 50, 55) / #323237
// Header:           rgb(40, 40, 45) / #28282d
// Sent Message:     rgb(70, 70, 75) / #46464b
// Received Message: rgb(40, 40, 45) / #28282d
// Border:           rgb(90, 90, 95) / #5a5a5f
// Focus:            rgb(90, 90, 95) / #8cb4fa

export const Chat = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #323237;
  border: 1px solid #5a5a5f;
  border-radius: 5px;

  width: 50%;
  height: 90%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  background-color: #28282d;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  height: 60px;
  padding: 10px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  height: 100%;
  padding: 10px;

  overflow-y: scroll;
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
  color: #ffffff;

  background-color: #1e1e23;
  border: 1px solid #5a5a5f;
  border-radius: 5px;

  width: 200px;
  height: 35px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid #8cb4fa;
    transition: 100ms ease-in-out;
  }
`;

export const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #46464b;
  border: none;
  border-radius: 5px;

  width: 30px;
  height: 30px;
  padding: 5px;

  cursor: pointer;

  &:hover {
    filter: brightness(115%);
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;
