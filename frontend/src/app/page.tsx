import HomeText from "@/components/home/HomeText";
import Box from "@/components/home/Box";

export default function Home() {
  return (
    <main
      className={`flex justify-start items-center w-full h-[88vh] max-sm:flex-col`}
    >
      <section
        className={`h-full w-1/2 max-sm:w-full max-sm:h-1/2 flex items-center justify-center`}
      >
        <Box />
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
