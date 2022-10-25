import { AppProps } from "next/app";
import { FC } from "react";
import { AppBar } from "../components/AppBar";
import {TempMobileView} from "../views/temp-mobile-view";

require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="hidden lg:block relative mb-20">
          <div className="absolute left-0 top-0 background-graphic-upper"></div>
          <div className="absolute left-0 right-0 z-20">
            <AppBar />
          </div>
        </div>
        <div className="hidden lg:block z-10 mt-10">
          {/* @ts-ignore */}
          <Component {...pageProps} />
          {/*<Footer/>*/}
        </div>

        <div className="block lg:hidden">
          <TempMobileView/>
        </div>
      </div>
    </>
  );
};

export default App;
