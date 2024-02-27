import Image from "next/image";
import Link from "next/link";

export default function Localizacao() {
  return (
    <div className="bg-color1">
      <p className="py-12 text-center text-3xl font-bold text-white">
        ONDE ENCONTRAR
      </p>
      <div class="relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
        <div class="mx-auto w-full max-w-screen-xl px-4">
          <div class="grid w-full grid-cols-3 gap-6">
            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/amor.png"
                    alt="Powered by Vercel"
                    unoptimized={true}
                    width="150"
                    height="25"
                    className="w-full rounded-md"
                  />
                </div>
              </div>
              <div class="bg-white py-9">
                <Link href="#" className="flex justify-center">
                  <button
                    class="middle none center mr-4 w-80 rounded-lg bg-neutral-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-neutral-500/20 transition-all hover:shadow-lg hover:shadow-neutral-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    Saiba Mais
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden bg-white">
                  <Image
                    src="/img/HU.png"
                    alt="Powered by Vercel"
                    unoptimized={true}
                    width="150"
                    height="25"
                    className="w-full rounded-md pt-12"
                  />
                </div>
              </div>
              <div class="bg-white py-9">
                <Link href="#" className="flex justify-center">
                  <button
                    class="middle none center mr-4 w-80 rounded-lg bg-neutral-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-neutral-500/20 transition-all hover:shadow-lg hover:shadow-neutral-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    Saiba Mais
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/clinica-da-cidade.png"
                    alt="Powered by Vercel"
                    unoptimized={true}
                    width="150"
                    height="25"
                    className="w-full rounded-md"
                  />
                </div>
              </div>
              <div class="bg-white py-9">
                <Link href="#" className="flex justify-center">
                  <button
                    class="middle none center mr-4 w-80 rounded-lg bg-neutral-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-neutral-500/20 transition-all hover:shadow-lg hover:shadow-neutral-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    Saiba Mais
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
