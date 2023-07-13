import { GetPartyAPI } from "@/fetch/GetParty";
import Party from "@/components/Party";
import { GetPartyDataType } from "@/types/GetPartyDataType";

export default async function Parties() {
  const GetPartyData = await GetPartyAPI<GetPartyDataType>("/parties", {
    method: "GET",
  });

  let hasParty = false;
  for (const party of GetPartyData) {
    if (party instanceof Party) {
      hasParty = true;
      break;
    }
  }

  return (
    <section className={`w-full flex flex-col items-center ${!hasParty && `min-h-screen`} `}>
      {GetPartyData.map((party, index) => (
        <Party
          key={index}
          author={party.author}
          budget={party.budget}
          image={party.image}
          title={party.title}
          _id={party._id}
          services={party.services}
        />
      ))}
    </section>
  );
}
