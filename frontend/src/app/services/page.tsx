import Parties from "@/components/services/Parties";
import WelcomeServices from "@/components/services/WelcomeServices";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Services() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/account");
  }

  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-[88vh]`}
    >
      <WelcomeServices />
      <Parties />
    </main>
  );
}
