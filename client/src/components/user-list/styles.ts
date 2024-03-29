import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${(props) => props.theme.border.main};
  border-radius: 4px;

  width: 200px;
  height: 100px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${(props) => props.theme.border.main};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  height: 40px;

  padding: 10px;
`;

export const Span = styled.span`
  font-family: ${(props) => props.theme.fontFamily}, sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

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

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
