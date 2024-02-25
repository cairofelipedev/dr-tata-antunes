import Container from "@/components/container";
import ThemeSwitch from "@/components/themeSwitch";
import Image from "next/image";
import { myLoader } from "@/utils/all";
import Link from "next/link";
import Logo from "../public/img/logo-preta.jpg";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export default function Footer(props) {
  return (
    <Container className="mt-10 border-t border-gray-100 dark:border-gray-800">
      <div className="lg:grid grid-cols-3 gap-10 py-10">
        <div className="flex items-center justify-center">
          <a className="relative block">
            <Image
              src={Logo}
              alt="Powered by Vercel"
              unoptimized={true}
              width="250"
              height="25"
              className="rounded-md"
            />
          </a>
        </div>
        <div className="lg:grid grid-cols text-center py-4">
          <div className="lg:flex gap-10">
            <div className="lg:py-0">
              <Link
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                href="/">
                <div>Home</div>
              </Link>
            </div>
            <div className="lg:py-0">
              <Link
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                href="/about">
                <div>Sobre</div>
              </Link>
            </div>
            <div className="lg:py-0">
              <Link
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                href="/contact">
                <div>Contato</div>
              </Link>
            </div>
            <div className="lg:py-0">
              <Link
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-blue-500 dark:text-gray-400"
                href="/archive">
                <div>Blog</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="p-4">
            <Link href="#">
              <BsInstagram size={20} />
            </Link>
          </div>
          <div className="p-4">
            <Link href="#">
              <BsWhatsapp size={20} />
            </Link>
          </div>
          <div className="p-4">
            <Link href="#">
              <BsYoutube size={24} />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-sm">
        Copyright © {new Date().getFullYear()} {props?.copyright}.
        All rights reserved.
      </div>
      <Backlink />
    </Container>
  );
}

const Backlink = () => {
  return <a></a>;
};
