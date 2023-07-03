export async function GetPartyAPI<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(`${process.env.BASE_URL_GETPARTY}${input}`, init);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json() as T;
}
