import Head from "next/head";
import { useEffect, useState } from "react";
import { Rubik, Playfair_Display } from "next/font/google";
import PreLoader from "../src/layout/PreLoader";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../styles/glitch.css";
import "../styles/globals.css";
import "../public/static/plugin/bootstrap/css/bootstrap.min.css";
import "../public/static/plugin/themify-icons/themify-icons.css";
import "../public/static/css/style.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// Configure Google Fonts with next/font
const rubik = Rubik({
  weight: ['300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
});

const playfair = Playfair_Display({
  weight: ['400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
}); 

function MyApp({ Component, pageProps }) {
  const [load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  return (
    <>
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
      <div className={`${rubik.variable} ${playfair.variable}`}>
        {load && <PreLoader />}
        <Component {...pageProps} />
        <SpeedInsights />
      </div>
    </>
  );
}

export default MyApp;