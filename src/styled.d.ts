import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    palette: {
      highlightColor: string;
      subduedColor: string;
      backgroundColor: string;
      shadeColor: string;
    },
    spacing: {
      xxs: string,
      xs: string,
      sm: string,
      md: string,
      lg: string,
      xl: string,
      xxl: string,
    },
    breakpoints: {
      xs: string,
      sm: string,
      md: string,
    }
  }
}