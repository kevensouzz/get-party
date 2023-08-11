"use client";
import SignInButton from "@/components/account/SignInButton";
import { LogOut, ScanFace } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Auth() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <main className={`w-full h-[88vh] flex items-center justify-center`}>
        <section
          className={`flex flex-col justify-start items-center w-[620px] h-full overflow-hidden
        max-sm:w-[460px] max-[475px]:w-[400px] max-[425px]:w-[320px] max-[350px]:w-[275px]`}
        >
          <h1 className={`text-6xl font-medium mt-10 flex items-center`}>
            <span className="text-red-600">G</span>et{" "}
            <span className="text-red-600">A</span>uth
            <ScanFace className="text-red-600 w-12 h-12" />
          </h1>

          <div className="w-full h-1/2 mt-20 flex flex-col items-center justify-around">
            <SignInButton provider="google">Goolge</SignInButton>

            <SignInButton provider="github">Github</SignInButton>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main
      className={`w-full h-[88vh] flex flex-col items-center justify-center space-y-4`}
    >
      <section className="flex items-center justify-center gap-2 max-[375px]:flex-col">
        <img
          width={96}
          height={96}
          src={session.user?.image as string}
          alt={session.user?.name as string}
          className="rounded-full flex items-center justify-center cursor-pointer"
        />

        <span className="flex flex-col items-start justify-center max-[375px]:items-center">
          <h1 className="text-6xl max-md:text-4xl max-[375px]:text-2xl max cursor-pointer transition-all ease-linear duration-150 sm:hover:text-red-600">
            {session.user?.name}
          </h1>
          <h1 className="text-xl max-md:text-base cursor-pointer transition-all ease-linear duration-150 sm:hover:text-red-600">
            {session.user?.email}
          </h1>
        </span>
      </section>
      <span
        onClick={() => signOut()}
        className="flex items-center justify-center text-2xl gap-2 text-red-600 cursor-pointer transition-all ease-linear duration-150 sm:hover:text-white"
      >
        Sign Out
        <LogOut />
      </span>
    </main>
  );
}
