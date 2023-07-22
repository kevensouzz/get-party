import { GithubDataType } from "@/type/GithubDataType";
import { GET } from "../../fetch/Get";
import { FolderGit, Github, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";
import { GithubReposDataType } from "@/type/GithubReposDataType";

export default async function Contact() {
  const GithubData = await GET<GithubDataType>(`${process.env.BASE_URL_GITHUB}`, {
    method: "GET",
  });

  const GithubReposData = await GET<GithubReposDataType>(`${process.env.BASE_URL_GITHUB}/repos`, {
    method: "GET",
  });

  return (
    <main
      className={`flex items-center justify-center w-full h-[88vh] max-sm:flex-col`}
    >
      <section
        className={`h-full w-1/2 flex items-center justify-center max-sm:w-full max-sm:h-1/2`}
      >
        <img
          className={`rounded-full max-lg:max-h-96 max-lg:max-w-96 max-[920px]:max-h-80 max-[920px]:max-w-80 max-md:max-h-60 max-md:max-w-60`}
          src={GithubData.avatar_url}
          alt="Keven's Github picture"
        />
      </section>
      <section
        className={`h-full w-1/2 flex flex-col items-center justify-center px-24 space-y-10 max-xl:px-10 max-lg:px-4 max-md:p-2 max-sm:w-full max-sm:h-1/2`}
      >
        <span className={`flex flex-col max-sm:items-center`}>
          <div className={`text-5xl max-md:text-4xl`}>{GithubData.name}</div>
          <div
            className={`text-2xl flex items-center gap-2 max-md:text-xl max-[320px]:text-base max-md:gap-[2px]`}
          >
            <MapPin className={`max-md:w-5 max-sm:w-4`} />
            {GithubData.location}
          </div>
        </span>

        <span
          className={`flex w-full justify-between items-center capitalize text-xl max-[920px]:text-base max-[800px]:text-sm max-md:justify-evenly`}
        >
          <Link
            href={"https://github.com/kevensouzz"}
            target="_blank"
            className={`flex items-center gap-2 md:hover:text-red-600 transition-all duration-200 ease-linear max-[920px]:gap-1`}
          >
            <Github />
            <p className={`max-md:hidden`}>{GithubData.login}</p>
          </Link>

          <Link
            href={"https://github.com/kevensouzz/mern-app"}
            target="_blank"
            className={`flex items-center gap-2 md:hover:text-red-600 transition-all duration-200 ease-linear max-[920px]:gap-1`}
          >
            <FolderGit />
            <p className={`max-md:hidden`}>{GithubReposData[3].name}</p>
          </Link>

          <Link
            href={"https://www.linkedin.com/in/kevenssouza1/"}
            target="_blank"
            className={`flex gap-2 md:hover:text-red-600 transition-all duration-200 ease-linear max-[920px]:gap-1`}
          >
            <Linkedin />
            <p
              className={`max-[920px]:mt-[2px] max-[800px]:mt-[3px] max-md:hidden`}
            >
              {GithubData.name}
            </p>
          </Link>
        </span>
      </section>
    </main>
  );
}
