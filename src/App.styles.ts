import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
`;

export const ChatContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  width: 65%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    width: 100%;

    padding: 10px;
  }
`;
