import { FC, useState } from "react";
import logo from "../../public/images/cc_logo.png";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { navLinks } from "./navLinks";

export const AppBar: FC = () => {
  const [nav, setNav] = useState(true);
  const [btnState, setBtnState] = useState(true);
  function handleClick() {
    setBtnState((btnState) => !btnState);
  }
  let toggleClassCheck = btnState ? " hidden" : null;

  return (
    <nav className="bg-white drop-shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-5">
            <div>
              {/* <!-- Website Logo --> */}
              <a href="#home" className="flex items-center mt-2 p-2">
                <Image src={logo} height={80} width={150} alt="cerritus connect logo" className="img8" />
              </a>
            </div>
          </div>

          {/* <!-- Secondary Navbar items --> */}
          <div className="hidden md:flex text-xl font-grotesk font-bold items-center mr-3 space-x-12 m-2 p-2 text-black">
            {navLinks.map((link, index) => {
              return (
                <ul>
                  <Link href={link.path}>
                    <li
                      key={index}
                      className="transition duration-300 border-b-4 border-transparent hover:border-[#365B6D] hover:cursor-pointer"
                    >
                      {link.name}
                    </li>
                  </Link>
                </ul>
              );
            })}

            <div className="flex">
              <button className="border-3 space-x-1 m-2 border-purple-400 rounded-full content-center h-11 items-center justify-center bg-lightPurple font-bold hover:bg-purple-500 px-8 bg-transition duration-300 xl:ml-4">
                <Link href="#join"> Join Our Community</Link>
              </button>
            </div>
          </div>
          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={handleClick}>
              <svg
                className="w-9 h-9 text-black hover:text-commColor"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- mobile menu --> */}
      <div className={`mobile-menu${toggleClassCheck}`}>
        {navLinks.map((link, index) => {
          return (
            <ul className="ml-10">
              <Link href={link.path}>
                <li
                  key={index}
                  className="block px-2 py-4 font-bold transition duration-300 border-b-4 border-transparent text-black hover:cursor-pointer"
                >
                  {link.name}
                </li>
              </Link>
            </ul>
          );
        })}

        <div className="block px-2 py-4 font-bold transition duration-300 border-b-4 border-transparent text-black ml-10">
          <Link href="#join"> Join Our Community</Link>
        </div>
      </div>
    </nav>
  );
};
