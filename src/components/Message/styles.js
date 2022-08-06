import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sent ? "right" : "left")};
`;

export const Content = styled.div`
  background-color: ${(props) =>
    props.sent ? props.theme.message.primary : props.theme.message.secondary};
  border-radius: 5px;
  padding: 7px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: ${(props) => props.theme.text};
    word-break: break-all;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 5px;
`;

export const Time = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};
`;

export const Author = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.text};
`;
