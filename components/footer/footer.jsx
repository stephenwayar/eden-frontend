import Image from "next/image"
import Link from "next/link"
import whatsapp from '../../public/assets/images/whatsappicon.png'
import instagram from '../../public/assets/images/instagramicon.png'
import twitter from '../../public/assets/images/twittericon.png'
import facebook from '../../public/assets/images/facebookicon.png'
import linkedin from '../../public/assets/images/linkedinicon.png'
import Logo from "@components/logo/logo"

export default function Footer() {
  return(
    <>
      <div>
        <div className="bg-[#323232] px-5 py-10">
          <h1 className="font-bold text-transparent text-center text-xl lg:text-3xl bg-clip-text bg-gradient-to-r from-[#FF9A03]  to-[#A808F0]">SOCIAL LINKS</h1>

          <div className="flex justify-center space-x-3 mt-5">
            <Link passHref href="https://www.instagram.com/stephenwayar/">
              <a target="_blank" className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer relative">
                <Image layout="fill" src={instagram} />
              </a>
            </Link>

            <Link passHref href="https://twitter.com/stephenwayar">
              <a target="_blank" className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer relative">
                <Image layout="fill" src={twitter} />
              </a>
            </Link>

            <Link passHref href="https://www.linkedin.com/in/stephen-bulus-551228184//">
              <a target="_blank" className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer relative">
                <Image layout="fill" src={linkedin} />
              </a>
            </Link>

            <Link passHref href="https://web.facebook.com/stephen.wayar/">
              <a target="_blank" className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer relative">
                <Image layout="fill" src={facebook} />
              </a>
            </Link>

            <Link passHref href="https://wa.me/2349039481285">
              <a target="_blank" className="w-10 h-10 sm:w-14 sm:h-14 cursor-pointer relative">
                <Image layout="fill" src={whatsapp} />
              </a>
            </Link>
          </div>
        </div>

        <div className="bg-black px-5 py-10">
          <div className="flex justify-center">
            <Logo />
          </div>

          <h4 className="text-[#646464] text-sm mt-5 text-center font-light">
            © 2022 eden. Copyright © 2022 
          </h4>
        </div>
      </div>
    </>
  )
}