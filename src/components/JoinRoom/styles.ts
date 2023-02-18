import styled from 'styled-components';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.background};

  border: 1px solid ${(props) => props.theme.border.main};
  border-radius: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  width: 200px;
  height: 35px;

  padding: 5px;

  &:hover {
    outline: none;
    border: 1px solid #ffffff;
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
    border: 1px solid #ffffff;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.button.main};

  border: none;
  border-radius: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  width: 200px;
  height: 35px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.button.hover};
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;
