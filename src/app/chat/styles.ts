import styled from 'styled-components';

export const Wrapper = styled.div`
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

export const Button = styled.button`
  background-color: ${(props) => props.theme.button.main};

  border: none;
  border-radius: 4px;

  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};

  width: 120px;
  height: 40px;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.button.hover};
    transition: 100ms ease-in-out;
  }

  &:focus {
    outline: none;
  }
`;
