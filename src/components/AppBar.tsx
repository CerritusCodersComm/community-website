import {FC, useState} from "react";
import logo from "../../public/images/cc_logo.png";
import Image from "next/image";
import {FaBars, FaTimes} from "react-icons/fa";
import Link from "next/link";
import {navLinks} from "./navLinks";

export const AppBar: FC = () => {
    const [nav, setNav] = useState(true);

    return (
        <nav
            className={`flex justify-between bg-white text-black font-grotesk font-bold drop-shadow-md h-full py-10 md:py-0 md:px-0 sm:py-8 ${
                !nav && "fixed w-[100%]"
            }`}
        >
            <a className="mt-2 ml-10 md:block hidden" href="#home">
                <Image src={logo} height={80} width={150} />
            </a>
            <div className={`hidden xl:flex mr-3 xl:tems-center transition-all duration-500 ease-in`}>
                {navLinks.map((link, index) => {
                    return (
                        <div className="xl:flex items-center space-x-1 m-2 p-2 cursor-pointer" key={index}>
                            <ul>
                                <Link href={link.path}>
                                    <li
                                        key={index}
                                        className="font-bold transition duration-300 border-b-4 border-transparent hover:border-primary xl:ml-8 text-xl xl:my-0"
                                    >
                                        {link.name}
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    );
                })}
                <div className="flex items-center">
                    <button className="border-3 space-x-1 m-2 border-purple-400 rounded-full p-2 content-center h-11 items-center justify-center bg-lightPurple font-bold hover:bg-purple-500 px-6 bg-transition duration-300 xl:ml-8">
                        <Link href="#join"> Join Our Community</Link>
                    </button>
                </div>
            </div>

            {/* navbar for xsmall devices */}
            <div
                onClick={() => setNav((prev) => !prev)}
                className={`block md:pt-10 md:pr-6 sm:px-10 sm:py-2 md:py-4 md:px-0 md:mb-10 mx-5 ${nav && "xl:hidden"} z-10`}
            >
                {!nav ? (
                    <FaTimes color="primary" size={40} />
                ) : (
                    <FaBars color="primary" size={40} />
                )}
            </div>
            <div
                className={
                    !nav
                        ? "fixed left-0 top-0 w-[100%] min-h-[106vh] border-r border-r-grey-900 ease-in-out duration-700 bg-lightPurple flex justify-center items-center flex-col"
                        : "fixed left-[-100%] ease-in-out border-r border-r-grey-900 w-[100%] bg-lightPurple duration-700 min-h-[106vh]  flex justify-center items-center flex-col"
                }
            >
                <div className="text-2xl flex-shrink-0 pt-0 px-10 flex-cols bg-lightPurple">
                    {navLinks.map((link, index) => {
                        return (
                            <div
                                className="flex justify-center space-x-1 m-2 mt-2 p-2 cursor-pointer"
                                key={index}
                                onClick={() => setNav((prev) => !prev)}
                            >
                                <ul>
                                    <Link href={link.path}>
                                        <li
                                            key={index}
                                            className="font-bold transition duration-300 border-b-4 border-transparent hover:border-primary xl:ml-8 text-xl xl:my-0"
                                        >
                                            {link.name}
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        );
                    })}
                </div>
                <div className="flex justify-center bg-lightPurple">
                    <a
                        href="#join"
                        onClick={() => setNav((prev) => !prev)}
                        className="border-3 space-x-1 m-2 border-purple-400 rounded-full p-2 content-center h-11 items-center justify-center bg-lightPurple font-bold hover:bg-purple-500 px-6 bg-transition duration-300 xl:ml-8"
                    >
                        Join Our Community
                    </a>
                </div>
            </div>
        </nav>
    );
};