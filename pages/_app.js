import "../styles/globals.css";
import { Fragment } from "react";

import Header from "../components/layout/Header/Header";

function MyApp({ Component, pageProps }) {
  return (
    <main>
      <Header></Header>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
