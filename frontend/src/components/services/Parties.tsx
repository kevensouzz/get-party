import { GetPartyDataType } from "@/type/GetPartyDataType";
import Party from "./Party";
import { GET } from "@/fetch/Get";

export default async function Parties() {
  const GetPartyData = await GET<GetPartyDataType>(`${process.env.BASE_URL_GETPARTY}/parties`, {
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
