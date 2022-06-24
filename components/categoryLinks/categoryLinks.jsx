import Link from 'next/link'

export default function CategoryLinks() {
  return(
    <>
      <div className="max-w-[100rem] 2xl:max-w-[100rem] mx-auto px-4 md:px-8">
        <div className='mt-10 xl:pt-0 mb-10 md:mb-20'>
          <div className='sm:grid sm:grid-cols-2 sm:gap-5'>
            <div>
              <Link href="/shop/men">
                <div className="overflow-hidden rounded-lg cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                  <div className="bg-menSuit bg-center h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold font-mono text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl text-center'>MEN's SHOP</h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className='mt-5 sm:mt-0'>
              <Link href="/shop/women">
                <div className="overflow-hidden rounded-lg cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                  <div className="bg-womanShop bg-center h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold font-mono text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl text-center'>WOMEN's SHOP</h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className='mt-5 sm:mt-0'>
              <Link href="/shop/kids/girls">
                <div className="overflow-hidden rounded-lg cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                  <div className="bg-girlPink bg-center h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold font-mono text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl text-center'>KIDS - PINK</h1>
                  </div>
                </div>
              </Link>
            </div>

            <div className='mt-5 sm:mt-0'>
              <Link href="/shop/kids/boys">
                <div className="overflow-hidden rounded-lg cursor-pointer w-full h-52 sm:h-72 md:h-[20rem] lg:h-[25rem]">
                  <div className="bg-blueBoy bg-center h-52 sm:h-72 md:h-[20rem] lg:h-[25rem] hover:scale-125 rounded-lg w-full bg-cover transition duration-[2500ms] delay-75 ease-linear pt-[7rem] sm:pt-40 md:pt-48 lg:pt-64 xl:pt-52">
                  <h1 className='font-bold font-mono text-white text-4xl sm:text-3xl md:text-4xl lg:text-6xl text-center'>KIDS - BLUE</h1>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}