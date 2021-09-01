import { createGlobalStyle } from "styled-components";

export const ThemeProvider = createGlobalStyle`
  body {
    --colors-text: HSL(0, 0%, 87%, 1);
    --colors-subText: HSL(0, 0%, 66%, 1);
    --colors-emphasis: HSL(333, 100%, 52%, 1);
    --colors-background: HSL(210, 30%, 8%, 1);
    --colors-background-secondary:  HSL(210, 30%, 12%, 1);
    --colors-line: HSL(30, 7%, 22%, 1);
    --colors-info: HSL(230, 100%, 67%, 1);
    --colors-infoBG: HSL(210, 38%, 15%, 1);
    --colors-success: HSL(160, 100%, 40%, 1);
    --colors-successBG: HSL(160, 100%, 40%, 0.1);
    --colors-alert: HSL(30, 100%, 50%, 1);
    --colors-alertBG: HSL(38, 100%, 50%, 0.1);
    
    --fonts-emphasis: "Sriracha", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

export const theme = {
  colors: {
    primaryText: "var(--colors-text)",
    subText: "var(--colors-subText)",
    emphasis: "var(--colors-emphasis)",
    background: "var(--colors-background)",
    backgroundSecondary: "var(--colors-background-secondary)",
    line: "var(--colors-line)",
    info: "var(--colors-info)",
    infoBG: "var(--colors-infoBG)",
    success: "var(--colors-success)",
    successBG: "var(--colors-successBG)",
    alert: "var(--colors-alert)",
    alertBG: "var(--colors-alertBG)",
  },
  fonts: {
    emphasis: "var(--fonts-emphasis)",
  },
};
