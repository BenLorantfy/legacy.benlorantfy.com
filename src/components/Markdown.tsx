import ReactMarkdown from "react-markdown";
import styled from "styled-components";

export const Markdown = styled(ReactMarkdown)`
  ul {
    padding: 20px;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }

  li {
    margin-bottom: 2px;
  }

  font-size: 1.6rem;
`;
