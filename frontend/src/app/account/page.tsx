"use client";
import { LogIn, ScanFace } from "lucide-react";
import { signIn, useSession } from "next-auth/react";

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
            <button
              onClick={() => signIn("google")}
              className="border border-red-600 text-red-600 text-2xl flex items-center justify-center gap-1 font-medium w-full h-1/3 rounded-2xl transition-all ease-linear outline-none sm:hover:bg-black focus:bg-black"
            >
              Google
              <LogIn />
            </button>
            <button className="border border-red-600 text-red-600 text-2xl flex items-center justify-center gap-1 font-medium w-full h-1/3 rounded-2xl transition-all ease-linear outline-none sm:hover:bg-black focus:bg-black">
              Github
              <LogIn />
            </button>
          </div>
        </section>
      </main>
    );
  }

return (
  <main className={`w-full h-[88vh] flex items-center justify-center`}>
    logadasso
  </main>
)
}
