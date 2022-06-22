import Image from "next/image"
import shipping from '../../public/assets/images/shipping.png'
import refund from '../../public/assets/images/refund.png'
import shield from '../../public/assets/images/shield.png'

export default function ServiceLabel() {
  return(
    <div className="bg-[#F5F5F7] px-8 no-scrollbar overflow-x-auto flex md:justify-center space-x-9 xl:space-x-32 py-3 text-sm text-[#4A5568] font-light">
      <div className="flex space-x-4">
        <Image src={shipping} width={30} height={20}/>

        <p className="whitespace-nowrap">Fast and Free shipping over #20000</p>
      </div>

      <div className="flex space-x-4">
        <Image src={refund} width={23} height={20}/>

        <p className="whitespace-nowrap">Cash on Delivery</p>
      </div>

      <div className="flex space-x-4">
        <Image src={shield} width={20} height={20}/>

        <p className="whitespace-nowrap">Hassle-Free Warranty</p>
      </div>
    </div>
  )
}