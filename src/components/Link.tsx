import styled from 'styled-components';
import { getMarginFromProps, SpacingProps } from '../utils';

export const Link = styled.a.attrs({ target: "_blank" })<SpacingProps>`
  text-decoration: none;
  color: ${(props) => props.theme.palette.highlightColor};
  word-break: break-word;
  ${getMarginFromProps}

  &:hover {
    text-decoration: underline;
  }
`;
