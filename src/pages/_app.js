import "../styles/globals.css";

import * as React from "react";
import { Nav } from "../components/nav";
import { Providers } from "../components/providers";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Providers />
      <Component {...pageProps} />
    </>
  );
}
