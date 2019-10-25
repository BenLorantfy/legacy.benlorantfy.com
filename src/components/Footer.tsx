import * as React from 'react';
import styled from 'styled-components';
import { Link } from './Link';
import { ThemeSelector, ThemeSelectorProps } from './ThemeSelector';
import { Spacer } from './Spacer';

export const FooterContainer = styled.footer`
  width: 100%;
  margin: auto;
  flex-wrap: wrap;
  margin-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  @media(min-width: ${(props) => props.theme.breakpoints.md}) {
    width: ${(props) => props.theme.breakpoints.md};
    padding-left: 0px;
    padding-right: 0px;
  }

  @media print {
    background-color: white;
    display: none;
  }
`;


export interface FooterProps {
  onChangeTheme: ThemeSelectorProps["onChangeTheme"];
}

export const Footer: React.FC<FooterProps> = function(props) {
  return (
    <FooterContainer>
      <Spacer margin={{ bottom: "md", right: "md" }}>
        Want to work together on your next project? Check out <Link href="https://lorantfy.com/">lorantfy.com</Link> or email me at <Link href="mailto:ben@lorantfy.com">ben@lorantfy.com</Link>
      </Spacer>
      <ThemeSelector onChangeTheme={props.onChangeTheme} />
    </FooterContainer>
  )
}