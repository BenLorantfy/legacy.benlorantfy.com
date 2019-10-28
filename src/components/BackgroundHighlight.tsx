import styled from 'styled-components';
import { lighten } from 'polished';

export const BackgroundHighlight = styled.div`
  position: relative;
  padding: 20px;
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: ${(props) => lighten(0.4, props.theme.palette.highlightColor)}
`;
