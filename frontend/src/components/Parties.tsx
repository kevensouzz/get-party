import { GetPartyAPI } from "@/fetch/GetParty";
import Party from "@/components/Party";
import { GetPartyDataType } from "@/types/GetPartyDataType";

export default async function Parties() {
  const GetPartyData = await GetPartyAPI<GetPartyDataType>("/parties", {
    method: "GET",
  });
  return (
    <section className={`w-full flex flex-col items-center`}>
      {GetPartyData.map((party, index) => (
        <Party
          key={index}
          author={party.author}
          budget={party.budget}
          description={party.description}
          image={party.image}
          title={party.title}
          _id={party._id}
          services={party.services}
        />
      ))}
    </section>
  );
}
