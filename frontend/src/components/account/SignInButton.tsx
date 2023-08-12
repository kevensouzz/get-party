// import { LogIn } from "lucide-react";
const { LogIn } = require("lucide-react");
import { signIn } from "next-auth/react";

export default function SignInButton({
  children,
  provider,
}: {
  children: React.ReactNode;
  provider: string;
}) {
  return (
    <button
      onClick={() => signIn(provider)}
      className="border border-red-600 text-red-600 text-2xl flex items-center justify-center gap-1 font-medium w-full h-1/3 rounded-2xl transition-all ease-linear outline-none sm:hover:bg-black focus:bg-black"
    >
      {children}
      <LogIn />
    </button>
  );
}
