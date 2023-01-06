import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import "../styles/customstyles.css";
import Head from "next/head";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
