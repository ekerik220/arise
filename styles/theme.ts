import { createGlobalStyle } from "styled-components";

export const ThemeProvider = createGlobalStyle`
  body {
    --colors-primaryText: #DFDFDF;
    --colors-background: #2C2A28;
    --colors-background-secondary: #211F1E;
  }
`;

export const theme = {
  colors: {
    primaryText: "var(--colors-primaryText)",
    background: "var(--colors-background)",
    backgroundSecondary: "var(--colors-background-secondary)",
  },
};
