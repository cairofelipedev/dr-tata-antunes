import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Image from "next/image";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="bg-color1">
            <div className="bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center">
              <div className="grid-cols grid px-20 text-center">
                <p className="py-8 text-4xl font-black uppercase text-white">
                  Infectologia é mais
                  <br /> do que medicina.
                  <br /> É uma arte!
                </p>
                <p className="text-white">
                  SEJA BEM VINDO A UM ATENDIMENTO PERSONALIZADO
                </p>
                <div className="relative flex flex gap-2 overflow-hidden py-6">
                  <div className="px-5">
                    <Link href="/contact">
                      <button className="btn-default -- text-md relative w-52 overflow-hidden rounded-xl border border-[#bce1ff] bg-[#bce1ff] px-4 py-4 font-bold uppercase text-gray-900 transition-all duration-100 before:to-stone-50 hover:-translate-y-[3px] hover:bg-gradient-to-t hover:from-stone-100 hover:shadow-md">
                        <p className="text-md">CONTATO</p>
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link href="/about">
                      <button className="btn-default -- relative w-52 overflow-hidden rounded-xl border border-[#bce1ff] bg-[#bce1ff] px-4 py-4 font-bold uppercase text-gray-900 transition-all duration-100 before:to-stone-50 hover:-translate-y-[3px] hover:bg-gradient-to-t hover:from-stone-100 hover:shadow-md">
                        <p className="text-md">SOBRE</p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-screen-lg px-8 py-10 xl:px-5">
            <p className="pb-12 pt-5 text-center text-3xl font-bold">
              SOBRE
            </p>
            <div>
              <div className="grid grid-cols-2 items-center justify-center gap-10">
                <div>
                  <h1 className="pb-5 text-3xl font-black">
                    Thallyta Maria Tavares Antunes
                  </h1>
                  <p>
                    Possui graduação em Medicina pela Universidade
                    Federal de Alagoas (2015). Médica infectologista
                    pela Universidade Estadual de Ciências da Sáude de
                    Alagoas (2019). Mestranda do programa de
                    Epidemiologia em Saúde Pública da Escola Nacional
                    de Saúde Pública da Fiocruz. Médica infectologista
                    do setor de Vigilância em Saúde do HU-UFPI e
                    presidente da Comissão de Controle de Infecção
                    Hospitalar do HU-UFPI.
                  </p>
                </div>
                <div>
                  <div className="grid grid-rows-3 gap-3">
                    <div className="flex items-center justify-center">
                      <p className="flex w-3/5 items-center justify-center rounded-md border-2 border-[#bce1ff] py-5 text-center">
                        Serviço médico especializado e individualizado
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="flex w-3/5 items-center justify-center rounded-md border-2 border-[#bce1ff] py-5 text-center">
                        Tecnologia médica moderna
                      </p>
                    </div>
                    <div className="flex items-center justify-center">
                      <p className="flex w-3/5 items-center justify-center rounded-md border-2 border-[#bce1ff] py-5 text-center">
                        Atendimento ético e humanizado da medicina
                        clássica
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <p className="py-12 text-center text-3xl font-bold">
              ATUAÇÃO
            </p>
          </div>
          <div className="mx-auto max-w-screen-lg px-8 xl:px-5">
            <h1 className="py-12 text-center text-3xl font-bold">
              MÁTERIAS
            </h1>
            <div className="grid gap-10 md:grid-cols-2 lg:gap-10">
              {posts.slice(0, 2).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="landscape"
                  preloadImage={true}
                />
              ))}
            </div>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-10 xl:grid-cols-3 ">
              {posts.slice(2, 14).map(post => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                />
              ))}
            </div>
            <div className="flex justify-center py-10">
              <Link
                href="/archive"
                className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300">
                <span>Veja todos os blog</span>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
            <p className="py-12 text-center text-3xl font-bold">
              ONDE ENCONTRAR
            </p>
          </div>
          <div className="px-28 py-8">
            <div>
              <p className="py-8 text-center text-3xl font-bold">
                NA MÍDIA
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8bcc84MWu1c?si=C749BqllAgoj2oT-"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
              <div className="">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/8oPJymHax-U?si=CWPSI7cqS9Z7ec2W"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
}
