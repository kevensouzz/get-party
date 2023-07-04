import FormSignUp from "@/components/FormSignUp";

export default function Signup() {
  return (
    <main className={`w-full h-[88vh] flex items-center justify-center`}>
      <section
        className={`flex flex-col justify-between items-center w-[450px] h-[550px] max-sm:w-96 max-[425px]:w-80 max-[375px]:w-[300px] max-[375px]:h-[500px] max-[320px]:w-[275px] rounded-2xl bg-black overflow-hidden`}
      >
        <h1 className={`text-5xl font-medium pt-5`}>
          <span className="text-red-600">S</span>ign{" "}
          <span className="text-red-600">U</span>p
        </h1>

        <section
          className={`flex flex-col items-center justify-center bg-red-700 w-full h-3/4 rounded-t-3xl p-4 max-[320px]:p-2`}
        >
          <FormSignUp />
        </section>
      </section>
    </main>
  );
}
