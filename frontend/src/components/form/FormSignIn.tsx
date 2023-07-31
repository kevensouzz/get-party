"use client";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().nonempty(),
});

type formProps = z.infer<typeof schema>;

export default function FormSignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  async function handleForm(data: formProps) {
    console.log(data);
  }

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className={`w-full h-full flex flex-col justify-center items-center gap-4 max-[375px]:gap-3`}
    >
      <span className={`w-full space-y-1`}>
        <input
          {...register("email")}
          className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Email"
          type="email"
        />
        {errors.email?.message && (
          <p className="text-xs text-red-600">{errors.email.message}</p>
        )}
      </span>

      <span className={`w-full space-y-1`}>
        <input
          {...register("password")}
          className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Password"
          type="password"
          autoComplete="off"
        />
        {errors.password?.message && (
          <p className="text-xs text-red-600">{errors.password.message}</p>
        )}
      </span>

      <button
        type="submit"
        className={`w-full h-10 bg-black rounded-md flex justify-center items-center font-medium text-lg hover:text-red-600 transition-all ease-linear gap-1 outline-none focus:text-red-600`}
      >
        Sign-in
        <CheckCircle className="w-5 h-5" />
      </button>
      <p className="uppercase text-xs font-medium">
        Not have an account yet?{" "}
        <Link className="underline" href={"/sign-up"}>
          Sign-Up
        </Link>
      </p>
    </form>
  );
}
