import styled from "styled-components";
import { theme } from "styles/theme";

export const Article = styled.article`
  padding: 0 60px;

  p {
    font-size: 18px;
    margin-top: 15px;
  }

  em {
    font-family: ${theme.fonts.emphasis};
    color: ${theme.colors.emphasis};
    font-style: normal;
  }
`;
