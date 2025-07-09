/* eslint-disable @next/next/no-img-element */

import { navLinks } from "@/constants";
import Link from "next/link";
import ClientAuthButtons from "./ClientAuthButtons";

const Navbar = () => {

  return (
    <header className="w-full h-16 bg-white shadow-md">
      <nav className="w-11/12 md:w-3/4 h-16 mx-auto flex items-center justify-between">
        <div className="w-3/12">
          <Link href="/" className="flex space-x-1 items-center">
            <img src="/img/logo.png" alt="logo" width={18} height={10} />
            <h1 className="text-2xl text-center font-medium text-gray-800">
              AI Resume Pro
            </h1>
          </Link>
        </div>

        <div className="w-1/2">
          <ul className="flex gap-10">
            {navLinks.map(({ link, name }) => (
              <li key={name}>
                <Link href={link} className="nav-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <ClientAuthButtons />
      </nav>
    </header>
  );
};

export default Navbar;
