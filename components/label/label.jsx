import Link from "next/link"

export default function Nav(){
  return(
    <header className="text-center text-xs xl:text-base px-4 text-white bg-[#056424] py-[0.5rem] font-light sticky top-0">
      Free shipping for orders over ₦50,000 in Lagos. Any concerns please contact <Link passHref href="mailto:stephenbuluswayar@gmail.com"><a target="_blank" className="text-[#A3DC22] hover:underline">support</a></Link>
    </header>
  )
}