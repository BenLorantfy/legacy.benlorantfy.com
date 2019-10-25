import styled from 'styled-components';
import { getMarginFromProps } from '../utils';

export const Tag = styled.li`
  line-height: normal;
  background-color: ${(props) => props.theme.palette.shadeColor};
  color: white;
  display: inline-block;
  font-size: 1.4rem;
  border-radius: 4px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 6px;
  padding-right: 6px;
  ${getMarginFromProps};
`;