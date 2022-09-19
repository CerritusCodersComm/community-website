import Link from "next/link";
import { FC, useState } from "react";
import { navLinks } from "./navLinks";
import cerritusCodersLogo from "../assets/images/cerritus-coders-logo.png";
import Image from "next/image";

export const AppBar: FC = () => {
  return (
    <nav className="flex justify-between bg-white text-black font-grotesk font-bold drop-shadow-md">
      <div className="mt-2 ml-10">
        <Image src={cerritusCodersLogo} height={107} width={214} />
      </div>
      <div className={`hidden lg:flex mr-3 md:items-center transition-all duration-500 ease-in`}>
        {navLinks.map((link, index) => {
          return (
            <div className="md:flex items-center space-x-1 m-2 p-2 cursor-pointer" key={index}>
              <ul>
                <Link href={link.path}>
                  <li
                    key={index}
                    className="font-bold transition duration-300 border-b-4 border-transparent hover:border-commColor lg:ml-8 text-xl lg:my-0"
                  >
                    {link.name}
                  </li>
                </Link>
              </ul>
            </div>
          );
        })}
        <div className="flex items-center">
          <button className="border-3 space-x-1 m-2 border-purple-400 rounded-full p-2 content-center h-11 items-center justify-center bg-lightPurple font-bold hover:bg-purple-500 px-6 bg-transition duration-300 lg:ml-8">
            Join Our Community
          </button>
        </div>
      </div>

      {/* in mobile view hambuger icon will be visible */}
      <div className="lg:hidden flex content-center items-center mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
    </nav>
  );
};
