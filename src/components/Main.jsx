import InfoForm from "./InfoForm";

const Main = () => {
  return (
    <main className="bg-black text-white grid gap-10">
      <section id="skillset" className="grid p-3 sm:flex sm:gap-9 sm:p-4 sm:justify-around">
        <div className="grid gap-3 w-[368px]">
          <h2 className="font-bold text-[30px]">Skillset</h2>
          <p className="">
            With skills in over 4 different fields of design, I am the perfect
            person to hire when it comes to a full fledged project. Whatever
            your needs are, I can pretty much take on any challenge.
          </p>
        </div>
        <section className="grid sm:grid-cols-2 sm:gap-14">
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">Frameworks</h2>
            <ul className="text-gray-400 text-lg">
              <li>React</li>
              <li>Wordpress</li>
              <li>Tailwind</li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">Lenguages</h2>
            <ul className="text-gray-400">
              <li>HTML</li>
              <li>JavaScript</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">Source Control</h2>
            <ul className="text-gray-400">
              <li>Git/GitHub</li>
              <li>Netlify</li>
              <li>SCRUM / Agil</li>
            </ul>
          </div>
          <div className="grid gap-2">
            <img className="w-[50px]" src="/Vector.svg" alt="" />
            <h2 className="font-bold text-2xl">UX/UI</h2>
            <ul className="text-gray-400">
              <li>wireframing /UML</li>
              <li>Adobe Suite</li>
              <li>Elementor Expert</li>
            </ul>
          </div>
        </section>
      </section>
      <section id="projects" className="grid gap-9 p-4 justify-center">
        <div>
          <h2 className="text-[21px] text-gray-400">MY PROJECTS</h2>
          <p className="font-bold text-[30px]">
            Work that I've done for the past 8 years{" "}
          </p>
        </div>
        <section className="grid gap-5 sm:grid sm:grid-cols-2 sm:gap-6">
          <section className="bg-[#181823] grid h-[400px] sm:w-[530px] sm:h-[530px] ">
            <img
              className="sm:w-[530px] hover:scale-125"
              src="/car1.jpg"
              alt=""
            />
            <div className="grid gap-3 p-3">
              <h2 className="text-lg font-bold">E-Commerce Website Design</h2>
              <p className="text-lg">
                I Worked whit guys at CBRE to redesign their entire website and
                mobile app fro both Android and iOS. This project lasted for 4
                months and was a very challenging one.{" "}
              </p>
            </div>
          </section>

          <section className="bg-[#181823] h-[400px] sm:w-[530px] sm:h-[530px]">
            <img
              className="sm:w-[530px] hover:scale-125"
              src="rick1.jpg"
              alt=""
            />
            <div className="grid gap-3 p-3">
              <h2 className="font-bold text-lg">Rick and Morty App</h2>
              <p className="text-lg">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </section>

          <section className="bg-[#181823] h-[400px] sm:w-[530px] sm:h-[530px]">
            <img
              className="sm:w-[530px] hover:scale-125"
              src="user.jpg"
              alt=""
            />
            <div className="grid gap-3 p-3">
              <h2 className="font-bold text-lg">User Create with Api App</h2>
              <p className="text-lg">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </section>
          <section className="bg-[#181823] h-[400px] sm:w-[530px] sm:h-[530px]">
            <img
              className="sm:w-[530px] hover:scale-125"
              src="wheater.jpg"
              alt=""
            />
            <div className="grid gap-3 p-3">
              <h2 className="font-bold text-lg">Wheater App</h2>
              <p className="text-lg">
                I worked with the guys at CBRE to redesign their entire website
                and mobile app fro both Android and iOS. This project lasted for
                4 months and was a very challenging one.
              </p>
            </div>
          </section>
        </section>
      </section>
      <section className="sm:flex gap-5 justify-center">
        <div id="contact" className="p-3 sm:w-[550px]">
          <h2 className="font-bold text-[30px]">Let's talk business</h2>
          <p className="text-gray-400 text-[19px]">
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
