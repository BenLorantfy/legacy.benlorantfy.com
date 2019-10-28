import * as React from 'react';
import styled from 'styled-components';

export interface HeaderProps {
  text: React.ReactNode, 
  secondaryText?: React.ReactNode,
  tertiaryText?: React.ReactNode,
}

export const H1 = styled.h1`
  font-size: 6.4rem;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  margin-top: 0;
  color: ${(props) => props.theme.palette.highlightColor};
  font-weight: 700;
  page-break-inside: avoid;
  width: 100%;
`;

export const Header1: React.FC<HeaderProps> = (props) => {
  return (
    <header>
      <H1>{props.text}</H1>
    </header>
  )
}