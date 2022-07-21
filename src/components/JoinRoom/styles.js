import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #ffffff;

  background-color: #323237;
  border: 1px solid #5a5a5f;
  border-radius: 5px;

  width: 200px;
  height: 35px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid #8cb4fa;
    transition: 100ms ease-in-out;
  }
`;

export const Button = styled.button`
  background-color: #8cb4fa;
  border: none;
  border-radius: 5px;

  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #ffffff;

  width: 200px;
  height: 35px;

  cursor: pointer;

  &:hover {
    filter: brightness(115%);
    transition: 100ms ease-in-out;
  }
`;
