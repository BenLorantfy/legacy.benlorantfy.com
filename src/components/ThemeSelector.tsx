/// <reference path="../styled.d.ts" />

import * as React from 'react';
import { defaultTheme } from "../theme";
import styled, { DefaultTheme } from 'styled-components';
import { getSpacing } from '../utils';
import { DeepPartial } from '../utils/types';
import { lighten, darken } from 'polished'

export interface ThemeSelectorProps {
  onChangeTheme: (newTheme: DeepPartial<DefaultTheme>) => void
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = function(props) {
  return (
    <Container>
      {alternativeThemes.map((theme, idx) => (
        <ThemeButton 
          key={theme.name || idx}
          name={theme.name} 
          color={theme.palette.highlightColor} 
          onClick={() => props.onChangeTheme(theme)} 
          aria-label={`Change theme to ${theme.name}`}
        />
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    height: 50px;
  }
`;

const ThemeButton = styled.button<{ name: string, color: string }>`
  cursor: pointer;
  width: ${(props) => props.theme.name === props.name ? "50px" : "30px"};
  height: ${(props) => props.theme.name === props.name ? "50px" : "30px"};
  border-radius: 100%;
  background-color: ${(props) => props.color};
  appearance: none;
  outline: none;
  border: 4px solid ${(props) => props.theme.name === props.name ? darken(0.2, props.color) : "transparent"};
  margin-right: ${getSpacing("md")};
  transition: all 0.3s;

  &:hover, &:focus {
    background-color: ${(props) => lighten(0.1, props.color)};
    width: ${(props) => props.theme.name === props.name ? "50px" : "35px"};
      height: ${(props) => props.theme.name === props.name ? "50px" : "35px"};
  }
`;

const alternativeThemes: ({ name: string, palette: { highlightColor: string } } & DeepPartial<DefaultTheme>)[] = [
  defaultTheme,
  {
    name: "green",
    palette: {
      highlightColor: "#498F60",
      shadeColor: lighten(0.1, "#498F60"),
    }
  },
  {
    name: "red",
    palette: {
      highlightColor: "#BB0E00",
      shadeColor: lighten(0.1, "#BB0E00"),
    }
  }
]