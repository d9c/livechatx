import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const TextInput = styled.input`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #181818;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  height: 35px;

  &:focus {
    outline: none;
    border: 1px solid #8e7cc3;
    transition: 150ms ease-in-out;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: #ffffff;
  background: #8e7cc3;
  border: none;
  border-radius: 5px;
  width: 200px;
  height: 35px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
    transition: 100ms ease-in-out;
  }
`;
