export default async function GithubAPI(url?: string) {
  const data = await fetch(`${process.env.BASE_URL_GITHUB}${url}`);
  const res = data;

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
