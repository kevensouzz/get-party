import Link from "next/link";

export default function Home() {
  return (
    <main className={`flex flex-col justify-start items-center w-full h-full`}>
      <section
        className={`w-full h-1/2 flex flex-col justify-center items-center text-4xl max-lg:text-2xl max-md:text-lg max-sm:text-sm max-[375px]:px-14`}
      >
        Serviços de festa de altíssima qualidade!
        <span>
          <Link href={"/services"} className={`text-red-600 pr-2`}>
            Clique aqui
          </Link>
          e confira agora nossos serviços!
        </span>
      </section>

      <section
        className={`w-full h-1/2 flex flex-col justify-start items-center text-4xl  max-lg:text-2xl max-md:text-lg max-sm:text-sm max-[375px]:px-14`}
      >
        Mais de 10 anos atuando no mercado!
        <span>
          <Link href={"/about"} className={`text-red-600 pr-2`}>
            Clique aqui
          </Link>
          e saiba mais sobre nós!
        </span>
      </section>
    </main>
  );
}
