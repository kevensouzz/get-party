"use client";
import Parties from "@/components/services/Parties";
import WelcomeServices from "@/components/services/WelcomeServices";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function Services() {
  const { data: session } = useSession();

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
