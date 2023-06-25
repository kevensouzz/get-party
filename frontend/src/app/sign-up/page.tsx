"use client";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    username: z.string().nonempty().max(12),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  })
  .refine((fields) => fields.password === fields.confirmPassword, {
    path: ["confirmPassword"],
  });

type formProps = z.infer<typeof schema>;

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const handleForm = (data: formProps) => {
    console.log(data);
  };

  return (
    <main className={`w-full h-full flex items-center justify-center`}>
      <section
        className={`flex flex-col justify-between items-center w-[450px] h-[550px] max-sm:w-96 max-[425px]:w-80 max-[375px]:w-60 max-[375px]:h-[450px] rounded-2xl bg-black overflow-hidden`}
      >
        <h1 className={`text-5xl font-medium pt-5`}>
          <span className="text-red-600">S</span>ign{" "}
          <span className="text-red-600">U</span>p
        </h1>

        <section
          className={`flex flex-col items-center justify-center bg-red-700 w-full h-3/4 rounded-t-3xl p-4`}
        >
          <form
            onSubmit={handleSubmit(handleForm)}
            className={`w-full h-full flex flex-col justify-center items-center gap-6 max-[375px]:gap-4`}
          >
            <span className="w-full space-y-1">
              <input
                {...register("username")}
                className={`w-full h-10 rounded-md p-4 focus-visible:outline-none text-black`}
                placeholder="Digite seu nome de usuário"
                type="text"
              />
              {errors.username?.message && (
                <p className="text-xs">{errors.username.message}</p>
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
          </form>
        </section>
      </section>
    </main>
  );
}
