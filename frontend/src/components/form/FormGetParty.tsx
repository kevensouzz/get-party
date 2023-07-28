"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle } from "lucide-react";
import { Fetch } from "@/Fetch";
import { GetPartyPost } from "@/type/GetPartyPost";
import { useState } from "react";
import SuccessModal from "../services/modal/SuccessModal";

const schema = z.object({
  title: z.string().nonempty().max(22),
  author: z.string().nonempty().max(18),
  budget: z
    .number({
      required_error: "Budget is required",
      invalid_type_error: "Budget is required",
    })
    .refine((val) => String(val).length <= 7, {
      message: "Budget must have at most 7 characters",
    }),
  image: z.string().nonempty().max(32),
});

type formProps = z.infer<typeof schema>;

export default function FormGetParty() {
  const [successModal, setSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<formProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  function handleForm(data: formProps) {
    Fetch<GetPartyPost>("http://localhost:5000/parties", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => {
        setSuccessModal(!successModal);
        reset();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <form
      onSubmit={handleSubmit(handleForm)}
      className="w-5/6 h-full flex flex-col justify-center items-center
      gap-5 max-xl:gap-4 max-[425px]:gap-3"
    >
      <span className="w-full space-y-1">
        <input
          {...register("title")}
          className={`w-full h-10 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="title"
          type="text"
          maxLength={22}
        />
        {errors.title?.message && (
          <p className="text-xs text-red-600">{errors.title.message}</p>
        )}
      </span>
      <span className="w-full space-y-1">
        <input
          {...register("author")}
          className={`w-full h-10 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Author"
          type="text"
          maxLength={18}
        />
        {errors.author?.message && (
          <p className="text-xs text-red-600">{errors.author.message}</p>
        )}
      </span>
      <span className="w-full space-y-1">
        <input
          {...register("budget", { valueAsNumber: true })}
          className={`w-full h-10 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="Budget"
          type="number"
          maxLength={7}
        />
        {errors.budget?.message && (
          <p className="text-xs text-red-600">{errors.budget.message}</p>
        )}
      </span>
      <span className="w-full space-y-1">
        <input
          {...register("image")}
          className={`w-full h-10 sm:h-10 rounded-md p-4 focus-visible:outline-none text-black`}
          placeholder="ImageURL"
          type="text"
          maxLength={32}
        />
        {errors.image?.message && (
          <p className="text-xs text-red-600">{errors.image.message}</p>
        )}
      </span>
      <button
        type="submit"
        className={`w-full h-10 sm:h-10 bg-black rounded-md flex justify-center items-center font-medium text-lg hover:text-red-600 transition-all ease-linear gap-1`}
      >
        Submit
        <CheckCircle className="w-5 h-5" />
      </button>
      {successModal && (
        <SuccessModal
          onCloseSuccessModal={() => setSuccessModal(!successModal)}
          message="PARTY WAS CREATED SUCCESSFULLY!"
        />
      )}
    </form>
  );
}
