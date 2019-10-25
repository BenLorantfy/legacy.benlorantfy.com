import styled from 'styled-components';
export const Page = styled.main`
  width: 100%;
  margin: auto;
  background-color: white;
  padding: 20px;
  flex-wrap: wrap;

  @media(min-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 40px;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.sm}) {
    padding: 60px;
    padding-top: 55px;
  }

  @media(min-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => props.theme.breakpoints.md};
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    margin-top: 60px;
  }

  @media print {
    /** print media adds it's own padding, so we don't need any extra here */
    padding: 0;
  }
`;
