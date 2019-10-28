import styled from "styled-components";

export const HideOnMobile = styled.div`
  @media only screen (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;
