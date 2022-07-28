import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.main.primary};
  border: 1px solid ${(props) => props.theme.main.border};
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text.primary};

  width: 200px;
  height: 35px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.main.focus};
    transition: 100ms ease-in-out;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.main.focus};
  border: none;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text.primary};

  width: 200px;
  height: 35px;

  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(80%);
    transition: 100ms ease-in-out;
  }
`;
