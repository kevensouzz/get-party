import Party from "./Party";
import { Fetch } from "@/Fetch";

type GetPartyGet = [
  {
    title: string;
    author: string;
    budget: number;
    image: string;
    _id: string;
  }
];

export default async function Parties() {
  const GetPartyData = await Fetch<GetPartyGet>("http://localhost:5000", {
    method: "GET",
  });

  return (
    GetPartyData.length > 0 && (
      <section
        className={`w-full flex flex-col items-center min-h-screen bg-black`}
      >
        {GetPartyData.map((party, index) => (
          <Party
            key={index}
            author={party.author}
            budget={party.budget}
            image={party.image}
            title={party.title}
            _id={party._id}
          />
        ))}
      </section>
    )
  );
}
