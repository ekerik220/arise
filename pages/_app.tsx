import type { AppProps } from "next/app";
import Head from "next/head";
import "styles/theme.scss";
import "styles/globalStyles.scss";

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
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
