import Link from 'next/link'

export default function ShopLinks() {
  return(
    <>
      <div className="max-w-[100rem] 2xl:max-w-[100rem] mx-auto px-4 md:px-8">
        <div>
          <Link href="/shop">
            <div className="mt-5 overflow-hidden rounded-lg cursor-pointer md:mt-8 xl:mt-12 w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
              <div className="bg-shop xl:bg-bags xl:hover:bg-top h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                <h1 className='font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center'>Go To Shop</h1>
              </div>
            </div>
          </Link>
        </div>

        <div className='mt-4 md:mt-6 xl:mt-8'>
          <div className='sm:grid sm:grid-cols-2 gap-4 md:gap-6 xl:gap-8'>
            <Link href="/shop/men">
              <div className="overflow-hidden rounded-lg cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                <div className="bg-men sm:bg-right h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center'>MEN</h1>
                </div>
              </div>
            </Link>

            <Link href="/shop/women">
              <div className="overflow-hidden rounded-lg mt-4 sm:mt-0 cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                <div className="bg-women sm:bg-right h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center'>WOMEN</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div>
          <div className='mt-4 md:mt-6 xl:mt-8'>
            <Link href="/shop/kids">
              <div className="overflow-hidden rounded-lg cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                <div className="bg-kids h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover bg-center transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-center'>KIDS</h1>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}