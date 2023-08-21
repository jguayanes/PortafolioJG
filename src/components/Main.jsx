import InfoForm from "./InfoForm"


const Main = () => {
  return (
    <main className="bg-black text-white grid gap-10 ">
        <div className="text-lg grid gap-2 p-4 sm:relative sm:z-10">
            <h4 className="text-gray-600">WORK EXPERIENCE</h4>
            <h2 className="text-[30px] font-semibold">Companies I have worked for in the past.</h2>
        </div>

        <section className="bg-black text-white grid gap-[50px] text-[18px] p-4">
            <div className="grid gap-2">
                <img src="/01.png" alt="" />
                <h3><b className="text-green-500">Google</b>, Interaction Designer</h3>
                <p className="">I currently am the lead designer on the interaction desig team for Google Play.</p>
            </div>
            <div className="grid gap-2">
                <img src="/02.png" alt="" />
                <h3><b className="text-blue-500">Facebook</b>, Product Designer</h3>
                <p className="">I've worked on a wide variety of internal toold for facebooks over the past 6 yeras.</p>
            </div>
            <div className="grid gap-2">
                <img src="/03.png" alt="" />
                <h3><b className="text-pink-500">Dribbble</b>, Graphic Designer</h3>
                <p className="">I started my design coreer with Dribbble. I was incharge of creating ilustrations for the platform.</p>
            </div>
        </section>
        <section className=" sm:flex">
            <section className="bg-[#FFF3E4]  p-4 h-[500px] grid items-center">
                <h2 className="text-black text-center text-2xl font-bold">Philosophy & values</h2>
                <p className="text-gray-400 text-[18px]">I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.</p>

                <h3 className="text-black">Check my linkdin</h3>
            </section>
            <img className="sm:w-[720px] sm:h-[500px]" src="/fondo1.jpg" alt="" />
        </section>
        <section className="grid p-3 sm:flex sm:gap-9 sm:p-4 sm:justify-around">
            <div className="grid gap-3 w-[368px]">
                <h2 className="font-bold text-[30px]">Skillset</h2>
                <p className="">With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge.</p>
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

        <section className=" p-3 grid grid-cols-2 sm:flex sm:justify-center">
            <img src="Group 61.png" alt="" />
            <img src="Group 111.png" alt="" />
            <img src="Group 112.png" alt="" />
            <img src="Group 113.png" alt="" />
            <img src="Group 114.png" alt="" />
            <img src="Group 115.png" alt="" />
        </section>
        <section className="grid gap-9 p-4 justify-center">
            <div>
                <h2 className="text-[21px] text-gray-400">MY PROJECTS</h2>
                <p className="font-bold text-[30px]">Work that I've done for the past 8 years </p>
            </div>
            <section className="grid gap-5 sm:grid sm:grid-cols-2 sm:gap-6">
                <section className="bg-[#181823] grid h-[400px] sm:w-[530px] sm:h-[530px] ">
                    <img className="sm:w-[530px]" src="car1.jpg" alt="" />
                    <div className="grid gap-3 p-3">
                        <h2 className="text-lg font-bold">E-Commerce Website Design</h2>
                        <p className="text-lg">I Worked whit guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one. </p>
                    </div>
                </section>
            
                <section className="bg-[#181823] h-[400px] sm:w-[530px] sm:h-[530px]">
                    <img className="sm:w-[530px]" src="rick1.jpg" alt="" />
                    <div className="grid gap-3 p-3">
                        <h2 className="font-bold text-lg">Rick and Morty App</h2>
                        <p className="text-lg">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                    </div>
                </section>
            
                <section className="bg-[#181823] h-[400px] sm:w-[530px] sm:h-[530px]">
                    <img className="sm:w-[530px]" src="user.jpg" alt="" />
                    <div className="grid gap-3 p-3">
                        <h2 className="font-bold text-lg">User Create with Api App</h2>
                        <p className="text-lg">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                    </div>
                </section>
                <section className="bg-[#181823] h-[400px] sm:w-[530px] sm:h-[530px]">
                    <img className="sm:w-[530px]" src="wheater.jpg" alt="" />
                    <div className="grid gap-3 p-3">
                        <h2 className="font-bold text-lg">Wheater App</h2>
                        <p className="text-lg">I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.</p>
                    </div>
                </section>
            </section>
        </section>
        <section className="sm:flex">
            <section className="bg-[#FBE4FF] h-[350px] sm:w-[1000px] sm:h-[500px]">
                <div className="grid gap-3 p-3 sm:p-6">
                    <h2 className="text-black text-2xl font-bold">Behance</h2>
                    <p className="text-[19px] text-gray-500 sm:text-[24px]">If you area a person who enjoys photography, then I highly recommend that you check out my Instagram. I'm an avid traveller and I capture the best moments that I would love to cherish with the world</p>
                </div>
                <h3 className="text-black p-3">Follow me on Behance</h3>
            </section>
            <img className="sm:w-[600px] sm:h-[500px]" src="Rectangle 39.png" alt="" />
        </section>
        <section>
            <div className="p-3 grid gap-3 sm:w-[620px]">
                <h2 className="font-bold text-[30px]">Desing UX/UI</h2>
                <p className="text-[18px]">Each dribbble shot is made with love and care. Do check out my work on Dribbble. Likes and comments are appreciated.</p>
            </div>
            <h2 className="p-3 text-lg">Check more</h2>
        </section>
        <div>
            <img className="p-3" src="Rectangle 42.png" alt="" />
        </div>
        <section className="sm:flex gap-5 justify-center">
            <div className="p-3 sm:w-[550px]">
                <h2 className="font-bold text-[30px]">Let's talk business</h2>
                <p className="text-gray-400 text-[19px]">Now that you know a lot about me, let me know if you are interested to work with me.</p>
            </div>
            <InfoForm/>
        </section>
    </main>
  )
}

export default Main