import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import PreLoader from "../src/layout/PreLoader";
import "../styles/glitch.css";
import "../styles/globals.css";
import "../public/static/plugin/bootstrap/css/bootstrap.min.css";
import "../public/static/plugin/font-awesome/css/all.min.css";
import "../public/static/plugin/et-line/style.css";
import "../public/static/plugin/themify-icons/themify-icons.css";
import "../public/static/css/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Sebastiano Armeli</title>
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="author" content="Sebastiano Armeli"/>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Sebastiano Armeli Personal Website - Engineering leader and mentor"/>
        <meta name="keywords" content="Sebastiano Armeli, engineering manager, engineering leader, engineering leadership mentor, engineering coach, engineering speaker, engineering investor, startups, software engineering manager, software engineering leader"/>
        <meta property="og:title" content="Sebastiano Armeli Personal Website" />
        <meta property="og:description" content="Sebastiano Armeli Personal Website - Engineering leader and mentor"/>
      </Head>
      {load && <PreLoader />}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;