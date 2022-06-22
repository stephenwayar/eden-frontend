import Image from "next/image"
import logo from '../../public/assets/images/logo.png'

export default function Logo() {
  return(
    <>
      <div className="flex space-x-1">
        <Image src={logo} width={40} height={40}/>

        <h1 className="font-black italic mt-1 font-sans text-2xl text-[#056424]">
          eden
        </h1>
      </div>
    </>
  )
}