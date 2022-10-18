import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";

import { dark } from "../../styles/themes/dark";
import { light } from "../../styles/themes/light";

import * as S from "./styles";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const switchTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <S.Container>
      <S.ThemeSwitch>
        <S.LightModeIcon />
        <S.Switch onChange={switchTheme} defaultChecked />
        <S.DarkModeIcon />
      </S.ThemeSwitch>
    </S.Container>
  );
};
