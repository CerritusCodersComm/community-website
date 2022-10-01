import {AppProps} from "next/app";
import {FC} from "react";
import {AppBar} from "../components/AppBar";

require("../styles/globals.css");

const App: FC<AppProps> = ({Component, pageProps}) => {
    return (
        <>
            <div className='flex flex-col h-screen'>
                <div className='relative mb-20'>
                    <div className='absolute left-0 top-0 background-graphic-upper'></div>
                    <div className='absolute left-0 right-0 z-20'>
                        <AppBar/>
                    </div>
                </div>
                <div className='z-10'>
                    {/* @ts-ignore */}
                    <Component {...pageProps} />
                    {  /* Footer */
                        <div className="bg-base-300">
                            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                              <div>
                                 <p>Copyright © 2022 - All right reserved by Cerritus Coders</p>
                              </div>
                            </footer>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default App;