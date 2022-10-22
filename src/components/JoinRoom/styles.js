import styled from "styled-components";

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const TextInput = styled.input`
  background-color: ${(props) => props.theme.container.header};

  border: 1px solid ${(props) => props.theme.border};
  border-radius: 4px;

  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  width: 200px;
  height: 35px;

  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid #ffffff;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.border};

  border: none;
  border-radius: 4px;

  font-family: "Inter", sans-serif;
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
  }
`;
