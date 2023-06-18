import HomeText from "@/components/HomeText";

export default function Home() {
  return (
    <main className={`flex flex-col justify-start items-center w-full h-full`}>
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
    </main>
  );
}
