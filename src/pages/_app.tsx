import { AppProps } from "next/app";
import { FC } from "react";
import { AppBar } from "../components/AppBar";

require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="relative mb-20">
          <div className="absolute left-0 top-0 background-graphic-upper"></div>
          <div className="absolute left-0 right-0 z-20">
            <AppBar />
          </div>
        </div>
        <div className="z-10 mt-10">
          {/* @ts-ignore */}
          <Component {...pageProps} />
          {/*<Footer/>*/}
        </div>
      </div>
    </>
  );
};

export default App;
