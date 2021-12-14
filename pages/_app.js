import Head from "next/head";

import "styles/reset.css";
import "styles/globals.css";
import "styles/utility.css";
import "styles/components.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
