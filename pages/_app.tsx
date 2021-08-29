import type { AppProps } from "next/app";
import { GlobalStyles } from "styles/globalStyles";
import { ThemeProvider } from "styles/theme";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ToA Handbook</title>
        <meta
          name="description"
          content="Tales of Aselia guides and mechanics information."
        />
      </Head>
      <ThemeProvider />
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
