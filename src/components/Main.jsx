import InfoForm from "./InfoForm";

const Main = () => {
  return (
    <main className="bg-gradient-to-r from-[#183d3d] to-[#5C8374] dark:bg-gray-900  text-black dark:text-white grid gap-20">
      <section id="skillset" className="grid p-3 sm:flex sm:gap-9 sm:p-4 sm:justify-around gap-2">
        <div className="grid gap-3 w-[368px]">
          <h2 className="font-bold text-[30px]">Skillset</h2>
          <p className="sm:text-2xl text-justify">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <section className="grid sm:grid-cols-2 sm:gap-14">
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">Frameworks</h2>
            <ul className="text-gray-900 sm:text-gray-400 text-lg">
              <li>React</li>
              <li>Wordpress</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">Lenguages</h2>
            <ul className="text-gray-900 sm:text-gray-400 text-lg">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">Source Control</h2>
            <ul className="text-gray-900 sm:text-gray-400 text-lg">
              <li>Git/GitHub</li>
              <li>Netlify</li>
              <li>SCRUM / Agil</li>
            </ul>
          </div>
        </section>
      </section>
      <section id="projects" className="grid p-2 gap-3 sm:h-[900px] sm:justify-center">
        <div>
          <h2 className="text-[21px] text-gray-400 font-bold ">MY PROJECTS</h2>
          <p className="font-bold text-[30px]">
          </p>
        </div>
        <section className="grid gap-5 sm:grid-cols-2 sm:justify-center sm:items-center px-3">
          <section className="grid gap-6">
            <div className="w-[300px] sm:w-[550px]">
              <img
              className="rounded-sm shadow-2xl"
              src="/car1.jpg"
              alt=""
              />
            </div>
            <div className="flex gap-5 relative left-16 sm:justify-center">
              <a className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="">GitHub</a>
              <a className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://g25-cart-final.netlify.app/">Deploy</a>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="w-[300px] sm:w-[550px] ">
              <img
              className="rounded-sm shadow-2xl"
              src="rick1.jpg"
              alt=""
              />
            </div>
            <div className="flex gap-8 relative left-16 sm:justify-center ">
              <a className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://github.com/jguayanes/EntregableReact3">GitHub</a>
              <a className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://illustrious-jalebi-996d99.netlify.app/">Deploy</a>
            </div>
          </section>

          <section className="grid gap-6">
            <div className="w-[300px] sm:w-[550px]">
              <img
              className="rounded-sm shadow-2xl"
              src="user.jpg"
              alt=""
              />
            </div>
            <div className="flex gap-8 relative left-16 sm:justify-center ">
              <a className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://github.com/jguayanes/EntregableReact4">GitHub</a>
              <a className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm scale-110" target="_blank" href="https://create-your-user.netlify.app/">Deploy</a>
            </div>
          </section>
          <section className="grid gap-6">
            <div className="w-[300px] sm:w-[550px]">
              <img
              className="rounded-sm shadow-2xl"
              src="wheater.jpg"
              alt=""
              />
            </div>
            <div className="flex gap-8 relative left-16 sm:justify-center">
              <a className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://github.com/jguayanes/EntregableReact2">GitHub</a>
              <a className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://searthechwheater.netlify.app/">Deploy</a>
            </div>
          </section>
          <section className="grid gap-6">
            <div className="w-[300px] sm:w-[550px]">
              <img className="rounded-sm shadow-2xl" src="/pokedex.jpg" alt="" />
            </div>
            <div className="flex gap-8 relative left-16 sm:justify-center">
              <a className="w-20 h-8 cursor-pointer text-center shadow-md bg-[#b9b4c7] hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://github.com/jguayanes/Entregable5-pokedex">GitHub</a>
              <a className="bg-[#B9B4C7] w-20 h-8 cursor-pointer text-center shadow-md hover:bg-[#352F44] rounded-sm hover:scale-110" target="_blank" href="https://searchyourpokemon.netlify.app/">Deploy</a>
            </div>
          </section>
        </section>
      </section>
      <section className="sm:flex gap-5 justify-center items-center sm:h-[350px]">
        <div id="contact" className="p-3 sm:w-[550px]">
          <h2 className="font-bold text-[30px]">Let's talk business</h2>
          <p className="text-gray-900 dark:text-gray-400 text-[19px] w-[300px]">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
        </div>
        <InfoForm/>
      </section>
    </main>
  );
};

export default Main;
