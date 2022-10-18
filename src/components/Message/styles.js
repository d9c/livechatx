import styled from "styled-components";
import { Box as MuiBox } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Content = styled(MuiBox).attrs({
  sx: { boxShadow: 2 },
})`
  && {
    display: flex;
    flex-direction: column;
    gap: 8px;

    background-color: ${(props) =>
      props.$isSent ? props.theme.message.sent : props.theme.message.received};

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 4px;

    padding: 7px;
  }
`;

export const Message = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  color: ${(props) => props.theme.text};
  word-break: break-all;
`;

export const Info = styled.span`
  font-family: "Inter", sans-serif;
  font-size: 12px;
  color: ${(props) => props.theme.text};

  filter: opacity(70%);
`;
