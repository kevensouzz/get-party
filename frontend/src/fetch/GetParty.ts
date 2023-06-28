export default async function GetParty() {
  const res = await fetch("http://localhost:5000/api");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
