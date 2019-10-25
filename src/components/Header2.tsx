import styled from 'styled-components';
import { getSpacing } from '../utils';

export const Header2 = styled.h2`
  font-size: 3.8rem;
  font-family: 'Roboto Condensed';
  color: ${(props) => props.theme.palette.highlightColor};
  font-weight: 700;
  margin-top: 0;
  margin-bottom: ${getSpacing('md')};
  padding-bottom: ${getSpacing('sm')};
  border-bottom: 1px solid ${(props) => props.theme.palette.highlightColor};
  page-break-inside: avoid;
`;
