import Image from "next/image"
import Link from "next/link"
import womanNav from "../../public/assets/images/womannav.jpg"
import shoeNav from "../../public/assets/images/mensshoe.jpeg"
import watchNav from '../../public/assets/images/menswatch.jpeg'
import underwearNav from "../../public/assets/images/mensunderwear.png"

export default function MenNav() {
  return(
    <>
      <div className="w-[90%] max-w-[85rem] 2xl:max-w-[90rem] mx-auto py-5">
        <div className="flex justify-center space-x-5">
          <button>
            <div className="cursor-pointer">
              <div className="relative h-10 w-10 sm:h-16 sm:w-16 rounded-full">
                <Image className="rounded-full" src={shoeNav} layout="fill"/>
              </div>
            </div>
          </button>

          <button>
            <div className="cursor-pointer">
              <div className="relative h-10 w-10 sm:h-16 sm:w-16 rounded-full">
                <Image className="rounded-full" src={watchNav} layout="fill"/>
              </div>
            </div>
          </button>

          <button>
            <div className="cursor-pointer">
              <div className="relative h-10 w-10 sm:h-16 sm:w-16 rounded-full">
                <Image className="rounded-full" src={underwearNav} layout="fill"/>
              </div>
            </div>
          </button>

          <Link href='/shop/women'>
            <div className="cursor-pointer">
              <div className="relative h-10 w-10 sm:h-16 sm:w-16 rounded-full">
                <Image className="rounded-full" src={womanNav} layout="fill"/>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}