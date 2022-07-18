import styled from "styled-components";

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Content = styled.div`
  background-color: ${(props) => (props.sent ? "#46464b" : "#28282d")};
  border-radius: 5px;

  padding: 7px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #ffffff;
    word-break: break-all;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 5px;
`;

export const Time = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #ffffff;
`;

export const Author = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #ffffff;
`;
