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
          firstText="High quality party services!"
          link="/services"
          secondText="and check out our services now!"
        />
        <HomeText
          firstText="More than 10 years acting in the market!"
          link="/about"
          secondText="and learn more about us!"
        />
      </section>
    </main>
  );
}
