import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/img/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-gray-50 px-28 py-5 text-gray-800 shadow">
      <div className="mx-auto w-full">
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
          <div className="flex md:order-2 md:hidden">
            <button
              data-collapse-toggle="mobile-menu-3"
              type="button"
              className="inline-flex items-center justify-center rounded-lg text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 md:hidden"
              aria-controls="mobile-menu-3"
              aria-expanded="false">
              {/* SVG icons here */}
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className="hidden w-full items-end justify-between md:order-1 md:flex md:w-auto"
            id="mobile-menu-3">
            <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li className="py-1">
                <a
                  href="/"
                  className="block rounded py-2 pl-3 pr-4 text-gray-700 md:bg-transparent md:p-0 "
                  aria-current="page">
                  Home
                </a>
              </li>
              <li className="py-1">
                <a
                  href="/about"
                  className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-color1">
                  Sobre
                </a>
              </li>
              <li className="py-1">
                <a
                  href="#"
                  className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-color1">
                  Serviços
                </a>
              </li>
              <li className="py-1">
                <a
                  href="/archive"
                  className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-color1">
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-color1">
                  <button className="rounded-full border-2 border-color1 py-1 px-3">
                    Contato
                  </button>
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
