import Parties from "@/components/services/Parties";
import WelcomeServices from "@/components/services/WelcomeServices";

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
