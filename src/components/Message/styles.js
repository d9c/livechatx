import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const MessageContent = styled.div`
  background: ${(props) => (props.sent ? "#8e7cc3" : "#554a75")};
  border-radius: 5px;
  padding: 7px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #ffffff;
    word-break: break-all;
  }
`;

export const MessageInfo = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 5px;
`;

export const MessageTime = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #181818;
`;

export const MessageAuthor = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #181818;
`;
