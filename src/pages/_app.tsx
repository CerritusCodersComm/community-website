import {AppProps} from "next/app";
import Head from "next/head";
import {FC} from "react";
import {AppBar} from "../components/AppBar";
import {HeroSection} from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection";
import {HomeView} from "../views";

require("../styles/globals.css");

const App: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Cerritus Coders</title>
            </Head>
            <HomeView />
        </>
    );
};

export default App;
