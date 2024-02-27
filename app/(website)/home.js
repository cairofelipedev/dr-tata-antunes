import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";
import Sobre from "@/components/sobre";
import Atuacao from "@/components/atuacao";
import Localizacao from "@/components/local";
import Midia from "@/components/midia";
import Image from "next/image";

export default function Post({ posts }) {
  return (
    <>
      {posts && (
        <Container>
          <div className="bg-color1 grid grid-cols-2">
            <div className="order-last flex items-center px-20">
              <Image
                src="/img/logo-preta.png"
                alt="Powered by Vercel"
                unoptimized={true}
                width="150"
                height="25"
                className="w-full rounded-md"
              />
            </div>
            <div className="flex flex-col items-start justify-center py-16">
              <div className="grid-cols grid px-20 text-center">
                <p className="py-8 text-4xl font-black uppercase text-white">
                  Explorando a Infectologia: Uma Arte Além da
                  Medicina!
                </p>
                <p className="text-white">
                  Embarque conosco em um mergulho fascinante no mundo
                  da Infectologia, onde a ciência se transforma em uma
                  verdadeira obra de arte.
                </p>
              </div>
            </div>
          </div>
          <Sobre />
          <Atuacao />
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
          <Localizacao />
          <Midia />
        </Container>
      )}
    </>
  );
}
