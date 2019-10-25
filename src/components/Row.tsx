import styled from "styled-components";

export const Row = styled.div<{ alginItems?: string, justifyContent?: string }>`
  display: flex;
  align-items: ${(props) => props.alginItems};
  justify-content: ${(props) => props.justifyContent};
`;
