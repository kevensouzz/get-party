export async function Fetch<T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
) {
  const data = await fetch(input, init);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json() as T;
}
