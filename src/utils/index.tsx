import { DefaultTheme, css } from "styled-components";

type SpacingCode = keyof DefaultTheme["spacing"];

export interface SpacingProps {
  margin?: { 
    top?: SpacingCode,
    left?: SpacingCode,
    right?: SpacingCode,
    bottom?: SpacingCode,
  },
  padding?: { 
    top?: SpacingCode,
    left?: SpacingCode,
    right?: SpacingCode,
    bottom?: SpacingCode,
  }
}

export function getSpacing(size: keyof DefaultTheme["spacing"]) {
  return (props: { theme: DefaultTheme }) => {
    return props.theme.spacing[size];
  }
}

export function getMarginFromProps(props: { theme: DefaultTheme } & SpacingProps) {
  const margin = props.margin || {};
  return css`
    margin-top: ${margin.top ? props.theme.spacing[margin.top] : 0};
    margin-bottom: ${margin.bottom ? props.theme.spacing[margin.bottom] : 0};
    margin-left: ${margin.left ? props.theme.spacing[margin.left] : 0};
    margin-right: ${margin.right ? props.theme.spacing[margin.right] : 0};
  `;
}

export function getPaddingFromProps(props: { theme: DefaultTheme } & SpacingProps) {
  const padding = props.padding || {};
  return css`
    padding-top: ${padding.top ? props.theme.spacing[padding.top] : 0};
    padding-bottom: ${padding.bottom ? props.theme.spacing[padding.bottom] : 0};
    padding-left: ${padding.left ? props.theme.spacing[padding.left] : 0};
    padding-right: ${padding.right ? props.theme.spacing[padding.right] : 0};
  `;
}
