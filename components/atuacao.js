import Image from "next/image";
import Link from "next/link";

export default function Atuacao() {
  return (
    <div className="bg-color1">
      <p className="py-12 text-center text-3xl font-bold text-white">
        ATUAÇÃO
      </p>
      <div class="relative flex flex-col items-center justify-center overflow-hidden py-6 sm:py-12">
        <div class="mx-auto w-full max-w-screen-xl px-4">
          <div class="grid w-full grid-cols-3 gap-6">
            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/dengue.jpg"
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
                    DENGUE
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden bg-white">
                  <Image
                    src="/img/hiv.jpg"
                    alt="Powered by Vercel"
                    unoptimized={true}
                    width="150"
                    height="44"
                    className="w-full  rounded-md"
                  />
                </div>
              </div>
              <div class="bg-white py-9">
                <Link href="#" className="flex justify-center">
                  <button
                    class="middle none center mr-4 w-80 rounded-lg bg-neutral-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-neutral-500/20 transition-all hover:shadow-lg hover:shadow-neutral-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    HIV
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/bacterianas.jpg"
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
                    INFECÇÕES BACTERIANAS
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/pe.png"
                    alt="Powered by Vercel"
                    unoptimized={true}
                    width="150"
                    height="25"
                    className="w-full pt-12 bg-white rounded-md"
                  />
                </div>
              </div>
              <div class="bg-white py-9">
                <Link href="#" className="flex justify-center">
                  <button
                    class="middle none center mr-4 w-80 rounded-lg bg-neutral-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-neutral-500/20 transition-all hover:shadow-lg hover:shadow-neutral-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    PÉ DIABETICO
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/sitio.png"
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
                    INFECÇÕES PÓS OPERATORIAS
                  </button>
                </Link>
              </div>
            </div>

            <div class="relative flex max-w-sm flex-col overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:scale-105">
              <div class="h-auto overflow-hidden">
                <div class="relative h-60 overflow-hidden">
                  <Image
                    src="/img/covid.png"
                    alt="Powered by Vercel"
                    unoptimized={true}
                    width="150"
                    height="25"
                    className="w-full pt-10 bg-sky-500 rounded-md"
                  />
                </div>
              </div>
              <div class="bg-white py-9">
                <Link href="#" className="flex justify-center">
                  <button
                    class="middle none center mr-4 w-80 rounded-lg bg-neutral-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-neutral-500/20 transition-all hover:shadow-lg hover:shadow-neutral-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-light="true">
                    PÓS COVID
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
