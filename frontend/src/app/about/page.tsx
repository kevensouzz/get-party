export default function About() {
  return (
    <main className={`w-full h-[88vh] flex items-center justify-center`}>
      <section
        className={`flex flex-col justify-evenly self-center text-justify font-light text-2xl px-20 space-y-4 h-5/6 w-2/3 max-lg:px-8 max-lg:text-lg max-md:px-4 max-md:w-5/6 max-sm:px-0 max-sm:text-base max-[375px]:text-sm max-[320px]:text-xs`}
      >
        <p>
          Sistema desenvolvido a fim de aprimorar minhas habilidades e obter
          conhecimento sobre construção de APIs com Node, conexão ao banco de
          dados Mongo e consumo de APIs no front-end com React usando a FetchAPI
          do próprio JavaScript.
        </p>
        <p>
          <span className={`font-medium underline`}>
            Tecnologias usadas no desenvolivmento desse sistema
          </span>
          <br />
          para a construção da API foi usado o{" "}
          <span className={`underline decoration-red-600`}>
            NodeJS
          </span> com{" "}
          <span className={`underline decoration-red-600`}>ExpressJS</span>.
          <br />
          No front-end foi usado{" "}
          <span className={`underline decoration-blue-600`}>
            ReactJS
          </span> com{" "}
          <span className={`underline decoration-blue-600`}>NextJS</span>.{" "}
          <br />E para conectar a API com o{" "}
          <span className={`underline decoration-yellow-500`}>MongoDB</span> foi
          usado o{" "}
          <span className={`underline decoration-yellow-500`}>Mongoose</span>.
        </p>
      </section>
    </main>
  );
}
