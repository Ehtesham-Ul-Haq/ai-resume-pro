/* eslint-disable @next/next/no-img-element */

import { navLinks } from "@/constants";
import Link from "next/link";
import ClientAuthButtons from "./ClientAuthButtons";

const Navbar = () => {
  return (
    <header className="w-full h-16 bg-white text-gray-950 shadow-md dark:shadow-lg transition-colors duration-300 sticky top-0 z-50">
      <nav className="w-full md:w-11/12 h-16 md:mx-auto mx-2 flex items-center justify-between px-2">
        <div className="w-1/6 px-2">
          <Link href="/" className="flex space-x-1 items-center">
            <img src="/img/logo.png" alt="logo" width={18} height={10} />
            <h1 className="text-2xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              AI Resume Pro
            </h1>
          </Link>
        </div>

        <div className="w-5/6 flex items-center justify-between px-2">
          <div className="w-4/6 px-2">
            <ul className="flex justify-evenly px-2">
              {navLinks.map(({ link, name }) => (
                <li key={name}>
                  <Link
                    href={link}
                    className="nav-link transition-colors"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-2/6 flex items-center justify-between px-2">
            <ClientAuthButtons />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
