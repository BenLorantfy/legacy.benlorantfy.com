/// <reference path="./styled.d.ts"/>

import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider, DefaultTheme } from 'styled-components';
import { defaultTheme } from './theme';
import { TodayProvider } from './components/TodayProvider';
import merge from 'lodash.merge';

/** pages */
import { HomePage } from './pages/HomePage';

/** footer */
import { Footer } from './components/Footer';
import { DeepPartial } from './utils/types';

const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => props.theme.palette.backgroundColor};
  }

  html {
    font-size: 62.5%
  }

  body {
    font-size: 1.6rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', 'sans-serif';
  }

  @media print {
    html, body {
      background-color: white;
    }
  }
`;

const App: React.FC = () => {
  const [themeCustomizations, setThemeCustomizations] = useState<DeepPartial<DefaultTheme>>();
  const currentTheme: DefaultTheme = merge({}, defaultTheme, themeCustomizations);

  return (
    <ThemeProvider theme={currentTheme}>
      <TodayProvider>
        <GlobalStyles />
        <HomePage />
        <Footer onChangeTheme={(theme) => setThemeCustomizations(theme)} />
      </TodayProvider>
    </ThemeProvider>
  );
}


export default App;
