

const Footer = () => {
  return (
    <footer className="bg-[#181823] text-white p-3 grid h-[500px]">
        <div className="p-3 grid ">
            <h2 className=" text-2xl sm:text-[50px] font-serif font-semibold">Julian.G</h2>
            <div className="flex gap-3 h-9">
                <img src="Twitter Logo 1.png" alt="" />
                <img src="Dribbble Logo 1.png" alt="" />
                <img src="link.png" alt="" />
            </div>
        </div>
        <div className="p-3 ">
            <ul className="grid  grid-cols-2 gap-5 text-2xl">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Work</a></li>
                <li><a href="">Process</a></li>
                <li><a href="">Store</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Reading list</a></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer