import FormGetParty from "../form/FormGetParty";
import Box from "./Box";

export default function WelcomeServices() {
  return (
    <section className="w-full h-[88vh] flex items-center justify-center max-sm:flex-col">
      <div className="w-1/2 h-full flex items-center justify-center max-sm:w-full max-sm:h-[40%]">
        <Box />
      </div>
      <div className="w-1/2 h-full flex items-center justify-center max-sm:w-full max-sm:h-[60%]">
        <FormGetParty />
      </div>
    </section>
  );
}
