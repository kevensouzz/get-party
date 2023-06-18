import { FolderGit, Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://api.github.com/users/kevensouzz");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getRepos() {
  const res = await fetch("https://api.github.com/users/kevensouzz/repos");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Contact() {
  const data = await getData();
  const repos = await getRepos();

  return (
    <main
      className={`flex items-center justify-center w-full h-full max-sm:flex-col`}
    >
      <section className={`h-full w-1/2 flex items-center justify-center`}>
        <img
          className={`rounded-full`}
          src={data.avatar_url}
          alt="Keven's Github picture"
        />
      </section>
      <section
        className={`h-full w-1/2 flex flex-col items-center justify-center px-24 space-y-10`}
      >
        <span>
          <p className={`text-5xl`}>{data.name}</p>
          <p className={`text-2xl flex items-center gap-2`}>
            <MapPin />
            {data.location}
          </p>
        </span>

        <span className={`flex w-full justify-between capitalize`}>
          <Link
            href={"https://github.com/kevensouzz"}
            className={`text-xl flex items-center gap-2 hover:text-red-600 transition-all duration-300 ease-linear`}
          >
            <Github />
            <p>{data.login}</p>
          </Link>

          <Link
            href={"https://github.com/kevensouzz/mern-app"}
            className={`text-xl flex items-center gap-2 hover:text-red-600 transition-all duration-300 ease-linear`}
          >
            <FolderGit />
            <p>{repos[4].name}</p>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/kevenssouza1/"}
            className={`text-xl flex items-center gap-2 hover:text-red-600 transition-all duration-300 ease-linear`}
          >
            <Linkedin />
            <p>{data.name}</p>
          </Link>
        </span>
      </section>
    </main>
  );
}
