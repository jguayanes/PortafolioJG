

const Header = () => {
  return (
    <header id="home">
      <div>
        <img className="sm:w-[500px] sm:h-[500px] sm:relative sm:z-10 object-contain " src="/yo1.jpeg" alt="" />
      </div>
        <div className="bg-[#181823] text-white grid gap-2 p-4 sm:absolute sm:z-0 sm:top-0 sm:right-0 sm:w-[900px] sm:h-[700px]">
            <h2 className="text-[30px] font-bold sm:text-[56px] sm:relative sm:z-20 sm:top-16">I'm Julian Guayanés. A fronted developer  
            <span className="text-gray-600/90"> based in Colombia.</span></h2>
            <p className="text-[19px] sm:relative sm:z-20">I'm probably the most passionate designer you will ever get to work with. If you have a great project that needs some amazing skills, I'm your guy.</p>
        </div>
    </header>
  )
}

export default Header