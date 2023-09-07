import InfoForm from "./InfoForm";

const Main = () => {
  return (
    <main className="bg-gradient-to-r from-[#183d3d] to-[#5C8374] dark:bg-gray-900  text-black dark:text-white grid gap-20">
      <section id="skillset" className="grid p-3 sm:flex sm:gap-9 sm:p-4 sm:justify-around gap-2">
        <div className="grid gap-3 w-[368px]">
          <h2 className="font-bold text-[30px]">Skillset</h2>
          <p className="sm:text-2xl">
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
      <section id="projects" className="grid p-4 sm:h-[800px]">
        <div>
          <h2 className="text-[21px] text-gray-900 font-bold sm:text-gray-400">MY PROJECTS</h2>
          <p className="font-bold text-[30px]">
          </p>
        </div>
        <section className="grid gap-5 sm:relative sm:bottom-[350px]">
          <section className="cursor-pointer hover:scale-110 sm:absolute sm:w-[600px] sm:top-0 sm:hover:z-10">
            <a target="_blank" href="https://g25-cart-final.netlify.app/">   <img
              className="rounded-sm"
              src="/car1.jpg"
              alt=""
            /></a>
          </section>

          <section className="cursor-pointer hover:scale-110 sm:absolute sm:w-[600px] sm:top-[30%] sm:left-[15%] sm:hover:z-10">
            <a target="_blank" href="https://illustrious-jalebi-996d99.netlify.app/"><img
              className="rounded-sm"
              src="rick1.jpg"
              alt=""
            /></a>
          </section>

          <section className="cursor-pointer hover:scale-110 sm:absolute sm:w-[600px] sm:top-[60%] sm:left-[30%] sm:hover:z-10">
            <a target="_blank" href="https://create-your-user.netlify.app/">          <img
              className="rounded-sm"
              src="user.jpg"
              alt=""
            /></a>
          </section>
          <section className="cursor-pointer hover:scale-110 sm:absolute sm:w-[600px] sm:top-[90%] sm:left-[45%] sm:hover:z-10">
            <a target="_blank" href="https://searthechwheater.netlify.app/">            <img
              className="rounded-sm"
              src="wheater.jpg"
              alt=""
            /></a>
          </section>
          <section className="cursor-pointer hover:scale-110 sm:absolute sm:w-[600px] sm:top-[120%] left-[55%] ">
            <a target="_blank" href="https://searchyourpokemon.netlify.app/"><img className="rounded-sm" src="/pokedex.jpg" alt="" /></a>
          </section>
        </section>
      </section>
      <section className="sm:flex gap-5 justify-center items-center sm:h-[350px]">
        <div id="contact" className="p-3 sm:w-[550px]">
          <h2 className="font-bold text-[30px]">Let's talk business</h2>
          <p className="text-gray-900 dark:text-gray-400 text-[19px]">
            Now that you know a lot about me, let me know if you are interested
            to work with me.
          </p>
        </div>
        <InfoForm />
      </section>
    </main>
  );
};

export default Main;
