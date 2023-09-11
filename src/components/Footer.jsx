const Footer = () => {
  return (
    <article className="grid p-4 justify-center bg-gradient-to-r from-[#183d3d] to-[#5C8374] dar:bg-[#183d3d] sm:h-[100px] items-end">
        <div className="w-[160px] ">
            <ul className="flex gap-2">
                <li><a target="_blank" href="https://www.instagram.com/juliang_0302/"><img src="/insta.png" alt="" /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/julianandres0304/"><img src="/face.png" alt="" /></a></li>
                <li><a target="_blank" href="https://twitter.com/Julian92364861"><img src="/tw.png" alt="" /></a></li>
                <li></li>
                <li><a target="_blank" href="https://github.com/jguayanes"><img src="/github.png" alt="" /></a></li>
                <li></li>
            </ul>
        </div>
    </article>
  )
}

export default Footer