"use client";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";

const schema = z
  .object({
    name: z.string().nonempty().max(12),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
  });

type formProps = z.infer<typeof schema>;

export default function FormSignUp() {
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
      <span className="w-full space-y-1">
        <input
          {...register("name")}
          className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Digite seu nome"
          type="text"
        />
        {errors.name?.message && (
          <p className="text-xs">{errors.name.message}</p>
        )}
      </span>

      <span className={`w-full space-y-1`}>
        <input
          {...register("email")}
          className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Digite seu email"
          type="email"
        />
        {errors.email?.message && (
          <p className="text-xs">{errors.email.message}</p>
        )}
      </span>

      <span className={`w-full space-y-1`}>
        <input
          {...register("password")}
          className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Digite sua senha"
          type="password"
          autoComplete="off"
        />
        {errors.password?.message && (
          <p className="text-xs">{errors.password.message}</p>
        )}
      </span>

      <span className={`w-full space-y-1`}>
        <input
          {...register("confirmPassword")}
          className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Confirme sua senha"
          type="password"
          autoComplete="off"
        />
        {errors.confirmPassword?.message && (
          <p className="text-xs">{errors.confirmPassword.message}</p>
        )}
      </span>

      <button
        type="submit"
        className={`w-full h-10 bg-black rounded-md flex justify-center items-center font-medium text-lg hover:text-red-600 transition-all ease-linear gap-1`}
      >
        Sign-up
        <CheckCircle className="w-5 h-5" />
      </button>
      <p className="uppercase text-xs font-medium">
        já tem uma conta?{" "}
        <Link className="underline" href={"/services/sign-in"}>
          Login
        </Link>
      </p>
    </form>
  );
}
