import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/logo.png";

const NavBar = () => {
  return (
    <nav className="shadow mb-2 px-28 py-5 text-gray-800 bg-gray-50">
      <div className="w-full mx-auto">
        <div className="mx-2 flex flex-wrap items-center justify-between">
          <Link href="/">
            <div className="block text-center">
              <Image
                src={Logo}
                alt="Powered by Vercel"
                unoptimized={true}
                width="150"
                height="25"
                className="rounded-md"
              />
            </div>
          </Link>
          <div className="flex md:hidden md:order-2">
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center"
              aria-controls="mobile-menu-3"
              aria-expanded="false"
            >
              {/* SVG icons here */}
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden md:flex justify-between items-end w-full md:w-auto md:order-1" id="mobile-menu-3">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <li>
                <a href="/"
                  className="text-gray-700 font-bold md:bg-transparent block pl-3 pr-4 py-2 md:p-0 rounded"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="/about"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a href="#"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a href="/archive"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact"
                  className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
