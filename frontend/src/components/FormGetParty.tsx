"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Plus } from "lucide-react";

const schema = z.object({
  title: z.string().nonempty().max(24),
  author: z.string().nonempty(),
  budget: z.string().nonempty("Number must contain at least 1 digit(s)"),
  imageURL: z.string().nonempty(),
});

type formProps = z.infer<typeof schema>;

export default function FormGetParty() {
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
      className="w-5/6 h-full flex flex-col justify-center items-center
      gap-5 max-md:gap-4  max-sm:gap-3 max-[425px]:gap-2"
    >
      <span className="w-full space-y-1">
        <input
          {...register("title")}
          className={`w-full h-8 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="title"
          type="text"
        />
        {errors.title?.message && (
          <p className="text-xs">{errors.title.message}</p>
        )}
      </span>

      <span className="w-full space-y-1">
        <input
          {...register("author")}
          className={`w-full h-8 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Author"
          type="text"
        />
        {errors.author?.message && (
          <p className="text-xs">{errors.author.message}</p>
        )}
      </span>

      <span className="w-full space-y-1">
        <input
          {...register("budget")}
          className={`w-full h-8 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Budget"
          type="number"
        />
        {errors.budget?.message && (
          <p className="text-xs">{errors.budget.message}</p>
        )}
      </span>

      <span className="w-full space-y-1">
        <input
          {...register("imageURL")}
          className={`w-full h-8 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="ImageURL"
          type="text"
        />
        {errors.imageURL?.message && (
          <p className="text-xs">{errors.imageURL.message}</p>
        )}
      </span>

      <span className="w-full h-8 sm:h-10 flex items-center justify-center cursor-pointer rounded-md bg-neutral-300 text-neutral-600">
        Add a Service
        <Plus className="w-4 h-4" />
      </span>

      <button
        type="submit"
        className={`w-full h-8 sm:h-10 bg-black rounded-md flex justify-center items-center font-medium text-lg hover:text-red-600 transition-all ease-linear gap-1`}
      >
        Submit
        <CheckCircle className="w-5 h-5" />
      </button>
    </form>
  );
}
