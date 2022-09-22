import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { AppBar } from "../components/AppBar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";

require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      {/* <Head>
        <title>Cerritus Coders</title>
      </Head> */}

      {/* <div className="flex flex-col h-screen"> */}
      <AppBar />
      <Hero />
      <AboutSection />
      {/* </div> */}
      {/* <Component {...pageProps} /> */}
    </>
  );
};

export default App;
