import styled from 'styled-components';
import { getMarginFromProps, SpacingProps } from '../utils';

export const Header4 = styled.h4<SpacingProps>`
  font-size: 1.4rem;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  color: ${props => props.theme.palette.subduedColor};
  font-weight: 700;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.palette.highlightColor};
  ${getMarginFromProps};
`;
