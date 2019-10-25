import { DefaultTheme } from "styled-components";
import { lighten } from 'polished'

const colors = {
  blue: 'rgb(66, 134, 222)',
}

export const defaultTheme: DefaultTheme = {
  name: "default theme",
  palette: {
    highlightColor: colors.blue,
    subduedColor: 'rgb(133, 133, 133)',
    backgroundColor: 'rgb(247, 247, 247)',
    shadeColor: lighten(0.1, colors.blue),
  },
  spacing: {
    xxs: "2px",
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  },
  breakpoints: {
    xs: "600px",
    sm: "900px",
    md: "1100px",
  }
}