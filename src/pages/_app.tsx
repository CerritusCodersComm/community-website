import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { AppBar } from "../components/AppBar";
import { Hero } from "../components/Hero";

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

      {/* </div> */}
      {/* <Component {...pageProps} /> */}
    </>
  );
};

export default App;
