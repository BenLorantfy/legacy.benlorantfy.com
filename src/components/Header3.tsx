import * as React from 'react';
import styled from 'styled-components';
import { Row } from './Row';
import { getSpacing } from '../utils';
import { TagsList } from '../components/TagsList';
import { Tag } from '../components/Tag';

export interface HeaderProps {
  text: React.ReactNode, 
  secondaryText?: React.ReactNode,
  tertiaryText?: React.ReactNode,
  tags?: string[];
}

export const Header3: React.FC<HeaderProps> = (props) => {
  return (
    <Header>
      <Row>
        {props.secondaryText && <SecondaryText>{props.secondaryText}</SecondaryText>}
      </Row>
      <Row alginItems="baseline">
        <PrimaryText>{props.text}</PrimaryText>
      </Row>
      {props.tertiaryText && <TertiaryText>{props.tertiaryText}</TertiaryText>}
      {props.tags && (
        <TagsList>
          {props.tags.map((tag) => <Tag margin={{ right: "xs" }} key={tag}>{tag}</Tag>)}
        </TagsList>
      )}
    </Header>
  )
}

const Header = styled.header`
  margin-bottom: ${getSpacing("sm")};
  page-break-inside: avoid;
`;

const PrimaryText = styled.h3`
  font-size: 2.2rem;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 700;
`;

const SecondaryText = styled.span`
  font-size: 1.4rem;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  color: ${props => props.theme.palette.subduedColor};
  font-weight: 700;
`;

const TertiaryText = styled.span`
  font-size: 2.0rem;
  font-family: 'Roboto Condensed', Helvetica, Arial, sans-serif;
  color: ${props => props.theme.palette.subduedColor};
`;
