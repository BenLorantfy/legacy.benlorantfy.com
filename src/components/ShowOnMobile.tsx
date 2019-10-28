import styled from "styled-components";

export const ShowOnMobile = styled.div`
  @media (min-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }

  @media print {
    display: none;
  }
`;
