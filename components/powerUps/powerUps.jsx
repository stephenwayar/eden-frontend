import Image from 'next/image'
import brand1 from '../../public/assets/images/brand-0 1.png'
import brand2 from '../../public/assets/images/brand-2 1.png'
import brand3 from '../../public/assets/images/brand-3 1.png'
import brand4 from '../../public/assets/images/brand-4 1.png'
import brand5 from '../../public/assets/images/brand-5 1.png'
import brand6 from '../../public/assets/images/brand-6 1.png'

export default function PowerUps() {
  return(
    <>
      <div className='w-[90%] max-w-[85rem] 2xl:max-w-[90rem] mx-auto mb-10'>
        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 border-collapse">
          <div className="border-[#C4C4C4] border-y-2 sm:border-b-2 sm:border-t-0 sm:border-r-2 p-14">
            <div className='w-[5rem] h-14 mx-auto'>
              <Image className="mx-auto" src={brand1} />
            </div>
          </div>

          <div className="border-[#C4C4C4] border-b-2 md:border-r-2 p-14">
            <div className='w-[5rem] h-14 mx-auto'>
              <Image className="mx-auto" src={brand2} />
            </div>
          </div>

          <div className="border-[#C4C4C4] border-b-2 sm:border-r-2 md:sm:border-r-0 p-14">
            <div className='w-[5rem] h-14 mx-auto'>
              <Image className="mx-auto" src={brand3} />
            </div>
          </div>

          <div className="border-[#C4C4C4] border-b-2 md:sm:border-r-2 md:sm:border-b-0 p-14">
            <div className='w-[5rem] h-14 mx-auto'>
              <Image className="mx-auto" src={brand4} />
            </div>
          </div>

          <div className="border-[#C4C4C4] border-b-2 sm:border-b-0 sm:border-r-2 p-14">
            <div className='w-[5rem] h-14 mx-auto'>
              <Image className="mx-auto" src={brand5} />
            </div>
          </div>

          <div className="border-[#C4C4C4] border-b-2 sm:border-b-0 p-14">
            <div className='w-[5rem] h-14 mx-auto'>
              <Image className="mx-auto" src={brand6} />
            </div>
          </div>
        </div>

        <div className="mt-20 text-[#666C72]">
          <h1 className="text-2xl">Eden, Online Shopping Service</h1>

          <p className="font-light mt-5">
            Eden is an online shopping destination. We pride ourselves in having everything you could possibly need for your fashion lifestyle at the best prices than anywhere else. We are a reliable shopping service where you can purchase all your fashionable clothing items. Men, women and kids, we got you all. And accessories? Still got you. What more? You can have them delivered directly to you. Shop online with great ease as you pay with our online payment service which guarantees you the safest online shopping payment method, allowing you to make stress free payments. Or you can pay when you receive your package, whatever works best for you.
          </p>

          <p className="font-light mt-5">
            Enjoy the experience, cheers!
          </p>
        </div>
      </div>
    </>
  )
}