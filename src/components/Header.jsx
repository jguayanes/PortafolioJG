

const Header = () => {
  return (
    <header id="home">
      <div>
        <img className="sm:w-[500px] sm:h-[500px] sm:relative object-contain right-1 " src="/yo1.jpeg" alt="" />
      </div>
        <div className="bg-gradient-to-r from-[#183d3d] to-[#5C8374] text-white grid gap-2 p-4 sm:absolute sm:z-0 sm:top-10 sm:right-0 sm:w-[900px] sm:h-[650px]">
            <h2 className="text-[30px] font-bold sm:text-[56px] sm:relative sm:z-20 sm:top-28">I'm Julian Guayanés. A fronted developer  
            <span className="text-gray-600/90"> based in Colombia.</span></h2>
          
        </div>
    </header>
  )
}

export default Header