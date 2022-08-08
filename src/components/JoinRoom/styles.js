import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.container.secondary};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  width: 200px;
  height: 35px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.focus};
    transition: 100ms ease-in-out;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.focus};
  border: none;
  border-radius: 4px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

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
