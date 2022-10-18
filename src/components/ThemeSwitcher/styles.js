import styled from "styled-components";
import { Box as MuiBox, Switch as MuiSwitch } from "@mui/material";
import {
  LightMode as MuiLightModeIcon,
  DarkMode as MuiDarkModeIcon,
} from "@mui/icons-material";

export const Container = styled(MuiBox).attrs({
  sx: { boxShadow: 2 },
})`
  && {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 0;

    background-color: ${(props) => props.theme.container.header};

    border-radius: 4px;

    width: 150px;
    height: 50px;

    margin: 5px;
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Switch = styled(MuiSwitch)`
  && {
    .MuiSwitch-switchBase.Mui-checked {
      color: #ffffff;
    }

    .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track {
      background-color: #ffffff;
    }
  }
`;

export const LightModeIcon = styled(MuiLightModeIcon)`
  && {
    color: ${(props) => props.theme.text};
  }
`;

export const DarkModeIcon = styled(MuiDarkModeIcon)`
  && {
    color: ${(props) => props.theme.text};
  }
`;
