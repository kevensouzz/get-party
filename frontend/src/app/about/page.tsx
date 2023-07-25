export default function About() {
  return (
    <main className={`w-full h-[88vh] flex items-center justify-center`}>
      <section
        className={`flex flex-col justify-evenly self-center text-justify font-light text-2xl px-20 space-y-4 h-5/6 w-2/3 max-lg:px-8 max-lg:text-lg max-md:px-4 max-md:w-5/6 max-sm:px-0 max-sm:text-base max-[375px]:text-sm max-[320px]:text-xs`}
      >
        <p>
          System developed in order to improve my skills and obtain knowledge
          about building APIs with Node, database connection Mongo data and
          front-end consumption APIs with React using FetchAPI of JavaScript
          itself.
        </p>
        <p>
          <span className={`font-medium underline`}>
            Technologies used in the development of this system
          </span>
          <br />
          For the API building was used the{" "}
          <span className={`underline decoration-red-600`}>
            NodeJS
          </span> with{" "}
          <span className={`underline decoration-red-600`}>ExpressJS</span>.
          <br />
          In the front end was used{" "}
          <span className={`underline decoration-red-600`}>
            ReactJS
          </span> with{" "}
          <span className={`underline decoration-red-600`}>NextJS</span>. <br />
          and to connect the API with the{" "}
          <span className={`underline decoration-red-600`}>MongoDB</span> was
          used the{" "}
          <span className={`underline decoration-red-600`}>Mongoose</span>.
        </p>
      </section>
    </main>
  );
}
