import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import notfound from '../public/assets/images/notFound.png'
import Logo from '@components/logo/logo'

export default function Error404() {
  return(
    <>
      <div className='w-[90%] max-w-[85rem] 2xl:max-w-[90rem] mx-auto'>
        <Head>
          <title>Page not found</title>
          <link rel="shortcut icon" href="/assets/images/favicon.png" />
        </Head>

        <div className='mt-6 md:mt-8 xl:mt-10'>
          <Logo />
        </div>

        <div>
          <div className='w-48 h-48 lg:w-56 lg:h-56 mx-auto mt-14'>
            <Image src={notfound} />
          </div>

          <div className='text-center'>
            <h1 className='font-bold text-xl lg:text-2xl font-mono text-[#4A5568]'>LOOKS LIKE YOU'RE LOST</h1>

            <p className='mt-3 font-light lg:text-lg text-[#3d3b3b]'>The page that you are looking for is not available</p>
          </div>

          <div className='text-center mt-3'>
            <Link href="/">
              <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className='px-6 py-2 bg-[#056424] hover:bg-[#04541f] transition duration-75 delay-75 ease-linear rounded-md hover:shadow-md text-white'>
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}