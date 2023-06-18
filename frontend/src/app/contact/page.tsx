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
      <section
        className={`h-full w-1/2 flex items-center justify-center max-sm:w-full max-sm:h-1/2`}
      >
        <img
          className={`rounded-full max-lg:max-h-96 max-lg:max-w-96 max-[920px]:max-h-80 max-[920px]:max-w-80 max-md:max-h-60 max-md:max-w-60`}
          src={data.avatar_url}
          alt="Keven's Github picture"
        />
      </section>
      <section
        className={`h-full w-1/2 flex flex-col items-center justify-center px-24 space-y-10 max-xl:px-10 max-lg:px-4 max-md:p-2 max-sm:w-full max-sm:h-1/2`}
      >
        <span className={`flex flex-col max-sm:items-center`}>
          <div className={`text-5xl max-md:text-4xl`}>
            {data.name}
          </div>
          <div
            className={`text-2xl flex items-center gap-2 max-md:text-xl max-[320px]:text-base max-md:gap-[2px]`}
          >
            <MapPin className={`max-md:w-5 max-sm:w-4`} />
            {data.location}
          </div>
        </span>

        <span
          className={`flex w-full justify-between items-center capitalize text-xl max-[920px]:text-base max-[800px]:text-sm max-md:justify-evenly`}
        >
          <Link
            href={"https://github.com/kevensouzz"}
            target="_blank"
            className={`flex items-center gap-2 hover:text-red-600 transition-all duration-300 ease-linear max-[920px]:gap-1`}
          >
            <Github />
            <p className={`max-md:hidden`}>{data.login}</p>
          </Link>

          <Link
            href={"https://github.com/kevensouzz/mern-app"}
            target="_blank"
            className={`flex items-center gap-2 hover:text-red-600 transition-all duration-300 ease-linear max-[920px]:gap-1`}
          >
            <FolderGit />
            <p className={`max-md:hidden`}>{repos[4].name}</p>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/kevenssouza1/"}
            target="_blank"
            className={`flex gap-2 hover:text-red-600 transition-all duration-300 ease-linear max-[920px]:gap-1`}
          >
            <Linkedin />
            <p className={`max-[920px]:mt-[2px] max-[800px]:mt-[3px] max-md:hidden`}>{data.name}</p>
          </Link>
        </span>
      </section>
    </main>
  );
}
