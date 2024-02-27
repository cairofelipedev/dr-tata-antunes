import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-color1">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/">
              <div className="block flex h-20 items-center text-center">
                <Image
                  src="/img/logo-preta.png"
                  alt="Powered by Vercel"
                  unoptimized={true}
                  width="150"
                  height="25"
                  className="w-56 rounded-md"
                />
              </div>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white">
              Dra. Thallyta Antunes, infectologista e Presidente da
              Comissão de Controle de Infecções Relacionadas à Saúde.
            </p>
            <div className="mt-8 flex space-x-6 text-white">
              {/* Social media links */}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            {/* Navigation links */}
            <div>
              <p className="font-medium text-white">Company</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href="#">
                  Sobre
                </a>
                <a className="hover:opacity-75" href="#">
                  Blog
                </a>
                <a className="hover:opacity-75" href="#">
                  Atendimentos
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-white">Serviços</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href="#">
                  1on1 Coaching
                </a>
                <a className="hover:opacity-75" href="#">
                  Company Review
                </a>
                <a className="hover:opacity-75" href="#">
                  Accounts Review
                </a>
                <a className="hover:opacity-75" href="#">
                  HR Consulting
                </a>
                <a className="hover:opacity-75" href="#">
                  SEO Optimisation
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-white">Helpful Links</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href="#">
                  Contato
                </a>
                <a className="hover:opacity-75" href="#">
                  FAQs
                </a>
              </nav>
            </div>
            <div>
              <p className="font-medium text-white">Legal</p>
              <nav className="mt-4 flex flex-col space-y-2 text-sm text-white">
                <a className="hover:opacity-75" href="#">
                  Política de Privacidade
                </a>
                <a className="hover:opacity-75" href="#">
                  Termos &amp; Condições
                </a>
                <a className="hover:opacity-75" href="#">
                  Returns Policy
                </a>
                <a className="hover:opacity-75" href="#">
                  Acessibilidade
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-start text-white">
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
        <p className="text-center text-xs text-white mt-3">
          © 2024 CairoCodes
        </p>
      </div>
    </footer>
  );
};

export default Footer;
