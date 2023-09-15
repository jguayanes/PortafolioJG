const Footer = () => {
  return (
    <article className="grid p-4 sticky bottom-[40%] border-transparent left-0 w-[40px] ">
        <div className="">
            <ul className="flex gap-3 flex-col w-[30px] ">
                <li className=""><a className="" target="_blank" href="https://www.linkedin.com/in/julian-guayanes-890a37288/"><img src="/linke.png" alt="" className=""/></a></li>
                <li><a target="_blank" href="https://mail.google.com/mail/u/1/#inbox"><img src="/email1.png" alt="" /></a></li>
                <li><a target="_blank" href="https://github.com/jguayanes"><img src="/github.png" alt="" /></a></li>
            </ul>
        </div>
    </article>
  )
}

export default Footer