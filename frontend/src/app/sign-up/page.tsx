import FormSignUp from "@/components/form/FormSignUp";

export default function Signup() {
  return (
    <main className={`w-full h-[88vh] flex items-center justify-center`}>
      <section
        className={`flex flex-col justify-around items-center w-[620px] h-full overflow-hidden
        max-sm:w-[460px] max-[475px]:w-[400px] max-[425px]:w-[320px] max-[350px]:w-[275px]`}
      >
        <h1 className={`text-5xl font-medium pt-20`}>
          <span className="text-red-600">S</span>ign{" "}
          <span className="text-red-600">U</span>p
        </h1>
        <FormSignUp />
      </section>
    </main>
  );
}
