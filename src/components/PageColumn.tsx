import styled, { css } from "styled-components";

const columnsStyle = css`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 0;

  /**
    * This adds margins between columns but not after the last column
    */
  margin-left: ${(props) => props.theme.spacing.md};
  margin-right: ${(props) => props.theme.spacing.md};

  &:last-of-type {
    margin-right: 0;
  }

  &:first-of-type {
    margin-left: 0;
  }
`;

export const PageColumn = styled.div`
  /**
   * On mobile, we don't want the columns to shrink or grow, we just want 100%
   * width 
   */
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;

  /**
   * On non-mobile screens, the flex-basis is set to 0, and then each column can
   * grow equally to fill the space. This means each column ends up being
   * equally as wide.
   */
  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    ${columnsStyle}
  }

  @media print {
    ${columnsStyle}
  }
`;
