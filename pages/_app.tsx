import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import { ThemeProvider } from "styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
