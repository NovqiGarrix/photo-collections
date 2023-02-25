import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Fragment } from "react";
import NextProgress from "next-progress";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NextProgress color="#000" />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
