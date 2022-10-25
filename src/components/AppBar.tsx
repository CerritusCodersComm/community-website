import Link from "next/link";
import { FC, useState } from "react";
import { navLinks } from "./navLinks";
import cerritusCodersLogo from "../assets/images/cerritus-coders-logo.png";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export const AppBar: FC = () => {
  const [nav, setNav] = useState(true);
  console.log(nav);
  return (
    <nav
      className={`flex justify-between bg-white text-black font-grotesk font-bold drop-shadow-md ${
        !nav && "fixed w-[100%]"
      }`}
    >
      <div className="mt-2 ml-10">
        <Image src={cerritusCodersLogo} height={107} width={214} />
      </div>
      <div
        className={`hidden xl:flex mr-3 xl:tems-center transition-all duration-500 ease-in`}
      >
        {navLinks.map((link, index) => {
          return (
            <div
              className="xl:flex items-center space-x-1 m-2 p-2 cursor-pointer"
              key={index}
            >
              <ul>
                <Link href={link.path}>
                  <li
                    key={index}
                    className="font-bold transition duration-300 border-b-4 border-transparent hover:border-commColor xl:ml-8 text-xl xl:my-0"
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
            Join Our Community
          </button>
        </div>
      </div>

      {/* navbar for small devices */}
      <div
        onClick={() => setNav((prev) => !prev)}
        className={`block pt-10 pr-6 ${nav && "xl:hidden"} z-10`}
      >
        {!nav ? (
          <FaTimes color="commColor" size={40} />
        ) : (
          <FaBars color="commColor" size={40} />
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
                      className="font-bold transition duration-300 border-b-4 border-transparent hover:border-commColor xl:ml-8 text-xl xl:my-0"
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
          <button
            onClick={() => setNav((prev) => !prev)}
            className="border-3 space-x-1 m-2 border-purple-400 rounded-full p-2 content-center h-11 items-center justify-center bg-lightPurple font-bold hover:bg-purple-500 px-6 bg-transition duration-300 xl:ml-8"
          >
            Join Our Community
          </button>
        </div>
      </div>
    </nav>
  );
};
