

const Navbar = () => {
  return (
    <nav className="flex  justify-between p-5 bg-black text-white">
        <h2 className="font-bold font-serif sm:relative z-20">Guayanés, J</h2>
        <button className={
          `sm:relative z-20 `
        }>
            <img className="w-8" src="/menuIcon.svg" alt="" />
        </button>
    </nav>
  )
}

export default Navbar