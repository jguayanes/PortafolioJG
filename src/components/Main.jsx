import InfoForm from "./InfoForm";

import { FormattedMessage } from "react-intl";

const Main = () => {
  return (
    <main className="  text-black  grid gap-20">
      <section
        id="skillset"
        className="grid p-3 sm:flex sm:gap-9 sm:p-4 sm:justify-around gap-2"
      >
        <div className="grid gap-3 ">
          <h2 className="font-bold text-[30px] dark:text-white">
            <FormattedMessage id="app.skillset" defaultMessage="skillset" />
          </h2>
          <p className="sm:text-2xl text-start w-[250px] md:w-[500px] dark:text-gray-400">
            <FormattedMessage
              id="app.pskill"
              defaultMessage="With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge."
            />
          </p>
        </div>
        <section className="grid gap-8 sm:grid-cols-2 sm:gap-14">
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl dark:text-gray-400">
              <FormattedMessage
                id="app.frameworks"
                defaultMessage="frameworks"
              />
            </h2>
            <ul className="flex gap-2">
              <li>
                <img src="/react1.png" alt="react" />
              </li>
              <li>
                <img className="w-[50px]" src="/tailwind.svg" alt="Tailwind" />
              </li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl dark:text-gray-400">
              <FormattedMessage id="app.lenguages" defaultMessage="lenguages" />
            </h2>
            <ul className="flex gap-2">
              <li>
                <img src="/iconhtm.png" alt="html" />
              </li>
              <li>
                <img src="/java.png" alt="java" />
              </li>
              <li>
                <img src="css.png" alt="css" />
              </li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl dark:text-gray-400">
              <FormattedMessage
                id="app.source"
                defaultMessage="source control"
              />
            </h2>
            <ul className="flex gap-2">
              <li>
                <img src="/git.png" alt="" />
              </li>
              <li>
                {" "}
                <img className="w-[40px]" src="/github.png" alt="" />
              </li>
              <li>
                <img src="/net.png" alt="netlify" />
              </li>
            </ul>
          </div>
        </section>
      </section>
      <section
        id="projects"
        className="grid p-2 gap-4 sm:h-[900px] justify-center"
      >
        <div>
          <h2 className="text-[21px] text-gray-400 font-bold ">
            <FormattedMessage id="app.projects" defaultMessage="My Projects" />
          </h2>
          <p className="font-bold text-[30px]"></p>
        </div>
        <section className="grid gap-5 sm:grid-cols-2 sm:justify-center sm:items-center  px-3">
          <section className="grid gap-6">
            <div className="md:w-[500px]">
              <img className="rounded-sm shadow-2xl" src="/car1.jpg" alt="" />
            </div>
            <div className="flex gap-5 justify-center font-bold text-slate-800 relative z-10">
              <a
                className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] hover:text-white rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href=""
              >
                GitHub
              </a>
              <a
                className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://g25-cart-final.netlify.app/"
              >
                <FormattedMessage id="app.deploy" defaultMessage="Deploy" />
              </a>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="md:w-[500px]">
              <img className="rounded-sm shadow-2xl" src="rick1.jpg" alt="" />
            </div>
            <div className="flex gap-8 justify-center text-slate-900 font-bold  relative z-10">
              <a
                className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] hover:text-white rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://github.com/jguayanes/EntregableReact3"
              >
                GitHub
              </a>
              <a
                className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://illustrious-jalebi-996d99.netlify.app/"
              >
                <FormattedMessage id="app.deploy" defaultMessage="deploy" />
              </a>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="md:w-[500px]">
              <img className="rounded-sm shadow-2xl" src="user.jpg" alt="" />
            </div>
            <div className="flex gap-8 justify-center text-slate-900 font-bold relative z-10">
              <a
                className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] hover:text-white rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://github.com/jguayanes/EntregableReact4"
              >
                GitHub
              </a>
              <a
                className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm scale-110 grid items-center"
                target="_blank"
                href="https://create-your-user.netlify.app/"
              >
                <FormattedMessage id="app.deploy" defaultMessage="deploy" />
              </a>
            </div>
          </section>
          <section className="grid gap-6">
            <div className="md:w-[500px]">
              <img className="rounded-sm shadow-2xl" src="wheater.jpg" alt="" />
            </div>
            <div className="flex gap-8 justify-center text-slate-900 font-bold relative z-10">
              <a
                className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] hover:text-white rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://github.com/jguayanes/EntregableReact2"
              >
                GitHub
              </a>
              <a
                className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://searthechwheater.netlify.app/"
              >
                <FormattedMessage id="app.deploy" defaultMessage="deploy" />
              </a>
            </div>
          </section>
          <section className="grid gap-6">
            <div className="md:w-[500px]">
              <img
                className="rounded-sm shadow-2xl"
                src="/pokedex.jpg"
                alt=""
              />
            </div>
            <div className="flex gap-8 justify-center text-slate-900 font-bold relative z-10">
              <a
                className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] hover:text-white rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://github.com/jguayanes/Entregable5-pokedex"
              >
                GitHub
              </a>
              <a
                className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://searchyourpokemon.netlify.app/"
              >
                <FormattedMessage id="app.deploy" defaultMessage="deploy" />
              </a>
            </div>
          </section>
          <section className="grid gap-6">
            <div className="md:w-[500px]">
              <img className="rounded-sm shadow-2xl" src="/phrase.jpg" alt="" />
            </div>
            <div className="flex gap-8 justify-center text-slate-900 font-bold relative z-10">
              <a
                className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] hover:text-white rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://github.com/jguayanes/phraseChange"
              >
                GitHub
              </a>
              <a
                className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110 grid items-center"
                target="_blank"
                href="https://rad-lokum-033165.netlify.app/"
              >
                <FormattedMessage id="app.deploy" defaultMessage="deploy" />
              </a>
            </div>
          </section>
        </section>
      </section>
      <section className="sm:flex gap-5 justify-center items-center sm:h-[450px]">
        <div id="contact" className="p-3 sm:w-[550px]">
          <h2 className="font-bold dark:text-white text-[30px]">
            <FormattedMessage
              id="app.form"
              defaultMessage="Let's talk business"
            />
          </h2>
          <p className="text-slate-900 dark:text-gray-400 text-[19px] md:w-[300px]">
            <FormattedMessage
              id="app.form2"
              defaultMessage="Now that you know a lot about me, let me know if you are interested to work with me."
            />
          </p>
        </div>
        <InfoForm />
      </section>
    </main>
  );
};

export default Main;
