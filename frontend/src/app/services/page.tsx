import Parties from "@/components/Parties";
import WelcomeServices from "@/components/WelcomeServices";

export default async function Services() {
  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-[88vh]`}
    >
      <WelcomeServices />
      <Parties />
    </main>
  );
}
