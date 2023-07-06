import WelcomeServices from "@/components/WelcomeServices";
import { GetPartyAPI } from "@/fetch/GetParty";
import Party from "@/components/Party";

type GetPartyDataType = [
  {
    title: string;
    description: string;
    author: string;
    budget: number;
    image: string;
    services?: [
      {
        name: string;
        description: string;
        price: number;
        image: string;
      }
    ];
  }
];

export default async function Services() {
  const GetPartyData = await GetPartyAPI<GetPartyDataType>("/parties", {
    method: "GET",
  });

  return (
    <main
      className={`flex flex-col items-center justify-center w-full min-h-[88vh]`}
    >
      <WelcomeServices />

      <section className={`w-full flex flex-col items-center`}>
        {/* PARTIES */}

        {GetPartyData.map((party, index) => (
          <Party
            key={index}
            author={party.author}
            budget={party.budget}
            description={party.description}
            image={party.image}
            title={party.title}
          />
        ))}
      </section>
    </main>
  );
}
