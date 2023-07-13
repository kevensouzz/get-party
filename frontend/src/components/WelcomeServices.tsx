import FormGetParty from "./FormGetParty";

export default function WelcomeServices() {
  return (
    <section className="w-full h-[88vh] flex items-center justify-center max-sm:flex-col">
      <div className="w-1/2 h-full flex items-center justify-center max-sm:w-full max-sm:h-[40%]">
        <span className="w-5/6 h-5/6 bg-black bg-opacity-50 rounded-2xl flex flex-col items-center justify-center font-semibold text-9xl max-xl:text-8xl max-lg:text-7xl max-md:text-6xl max-sm:text-5xl">
          <span className="sm:cursor-pointer sm:hover:text-red-600 transition-all ease-linear duration-100">
            GET
          </span>
          <span className="sm:cursor-pointer sm:hover:text-red-600 transition-all ease-linear duration-100">
            YOUR
          </span>
          <span className="sm:cursor-pointer sm:hover:text-red-600 transition-all ease-linear duration-100">
            PARTY
          </span>
        </span>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center max-sm:w-full max-sm:h-[60%]">
        <FormGetParty />
      </div>
    </section>
  );
}
