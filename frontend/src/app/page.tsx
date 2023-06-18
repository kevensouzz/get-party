import HomeText from "@/components/HomeText";

export default function Home() {
  return (
    <main
      className={`flex justify-start items-center w-full h-full max-sm:flex-col`}
    >
      <section
        className={`h-full w-1/2 max-sm:w-full max-sm:h-1/2 flex items-center justify-center`}
      >
        <div
          className={`h-5/6 w-5/6 rounded-3xl bg-black bg-opacity-25 flex flex-col items-start justify-start pl-20 pt-16 text-9xl max-xl:text-8xl max-lg:pt-0 max-lg:pl-0 max-lg:items-center max-lg:justify-center max-lg:text-7xl`}
        >
          <span
            className={`sm:cursor-pointer sm:hover:uppercase sm:hover:text-red-600`}
          >
            <span className={`text-red-600`}>G</span>et
          </span>
          <span
            className={`sm:cursor-pointer ml-16 sm:hover:uppercase sm:hover:text-red-600 max-lg:ml-0`}
          >
            <span className={`text-red-600`}>P</span>arty
          </span>
        </div>
      </section>
      <section
        className={`h-full w-1/2 flex flex-col max-sm:h-1/2 max-sm:w-full`}
      >
        <HomeText
          firstText="Serviços de festa de altíssima qualidade!"
          link="/services"
          secondText="e confira agora nossos serviços!"
        />
        <HomeText
          firstText="Mais de 10 anos atuando no mercado!"
          link="/about"
          secondText="e saiba mais sobre nós!"
        />
      </section>
    </main>
  );
}
