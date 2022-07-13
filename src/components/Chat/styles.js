import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #cccccc;
  border-radius: 5px;
  width: 50%;
  height: 90%;
`;

export const ChatHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: #38314e;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  height: 60px;

  span {
    font-family: "Roboto", sans-serif;
    font-size: 14px;
    color: #ffffff;
  }
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  height: 100%;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(245, 245, 245);
  }

  &::-webkit-scrollbar-thumb {
    background: #8e7cc3;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #554a75;
  }
`;

export const MessageRow = styled.div`
  display: flex;
  justify-content: ${(props) => (props.sent ? "right" : "left")};
  width: 100%;
`;

export const ChatFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  height: 50px;
`;

export const WriteMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const TextInput = styled.input`
  border: 1px solid #cccccc;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #181818;
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  height: 35px;

  &:focus {
    outline: none;
    border: 1px solid #8e7cc3;
    transition: 100ms ease-in-out;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #8e7cc3;
  border: none;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;

  width: 30px;
  height: 30px;

  &:hover {
    opacity: 80%;
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;

// message
// export const Message = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// export const MessageContent = styled.div`
//   background: ${(props) => (props.sent ? "#8e7cc3" : "#554a75")};
//   border-radius: 5px;
//   padding: 7px;

//   span {
//     font-size: 14px;
//     color: #ffffff;
//     word-break: break-all;
//   }
// `;

// export const MessageInfo = styled.div`
//   display: flex;
//   justify-content: right;
//   align-items: center;
//   gap: 5px;
// `;

// export const MessageTime = styled.span`
//   font-size: 14px;
//   color: #181818;
// `;

// export const MessageAuthor = styled.span`
//   font-size: 14px;
//   font-weight: 500;
//   color: #181818;
// `;
