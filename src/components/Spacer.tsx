import styled from 'styled-components';
import { SpacingProps, getMarginFromProps, getPaddingFromProps } from '../utils';


export const Spacer = styled.div<SpacingProps>`
  ${getMarginFromProps}
  ${getPaddingFromProps}
`;
