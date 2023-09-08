import { useState } from "react"


const InfoForm = () => {
    const [infoForm, setInfoForm] = useState([])

    const handleGetStart = (e) =>{
        e.preventDefault()
        
    }

  return (
    <form id="" onClick={handleGetStart}  autoComplete="off" className="">
        <div className="dark:text-white text-2xl grid p-3 gap-3">
            <label className="font-semibold" htmlFor="Name">Name</label>
            <input className="bg-[#484852] rounded-md w-[280px] h-[35px]" type="text" id="Name" required/>
        </div>
        <div className="dark:text-white text-2xl grid p-3 gap-3">
            <label className="font-semibold" htmlFor="Email">Email</label>
            <input className="bg-[#484852]  rounded-md w-[280px] h-[35px]" type="text" id="Email" required/>
        </div>
        <div className="dark:text-white text-2xl grid p-3 gap-3">
            <label className="font-semibold" htmlFor="Message">Message</label>
            <input className="bg-[#484852] rounded-md w-[280px] h-[90px]" type="text" id="Message" required/>
        </div>
        <div className="grid justify-center p-3">
            <button className="bg-slate-800 rounded-md w-[250px] h-[50px] text-white font-bold">
            LET'S GET STARTED
            </button>
        </div>
    </form>
  )
}

export default InfoForm