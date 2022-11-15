import { AppProps } from "next/app";
import { FC } from "react";
import { AppBar } from "../components/AppBar";
import {JoinSection} from "../components/join-section/JoinSection";

require("../styles/globals.css");

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <div className="block relative mb-20">
          <div className="absolute left-0 top-0 background-graphic-upper"></div>
          <div className="absolute left-0 right-0 z-20">
            <AppBar />
          </div>
        </div>
        <div className="block z-10 bg-white md:mt-[40px]">
          {/* @ts-ignore */}
          <Component {...pageProps} />
          <JoinSection/>
        </div>
        
      </div>
    </>
  );
};

export default App;
