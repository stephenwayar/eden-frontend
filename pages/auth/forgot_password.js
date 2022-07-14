import React from "react"
import Head from "next/head"
import Image from "next/image"
import Logo from "@components/logo/logo"
import Link from "next/link"
import truck from "../../public/assets/images/deliveryTruck.png"
import bitcoin from "../../public/assets/images/bitncoin_cash.png"
import refund from "../../public/assets/images/refund_policy.png"

export default function ForgotPassword() {
  return(
    <div>
      <Head>
        <title>Forgot Password</title>
        <link rel="shortcut icon" href="/assets/images/favicon.png" />
      </Head>

      <div className="hidden lg:block bg-[#f8fbf0] h-screen fixed lg:w-1/3">
        <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
          <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          
          <div class="carousel-inner relative w-full overflow-hidden">
            <div class="carousel-item active float-left h-screen w-full relative">
              <div className="absolute bottom-[35%] w-full">
                <div className="flex justify-center w-full">
                  <div className="relative rounded-full h-60 xl:h-80 xl:w-96 w-80">
                    <Image className="rounded-full" priority={true} src={truck} layout="fill" />
                  </div>
                </div>
 
                <div className="mt-14 text-center">
                  <h1 className="text-xl max-w-[17rem] mx-auto font-semibold font-mono text-[#056424]">Fast delivery anywhere you live...</h1>
                </div>
              </div>
            </div>

            <div class="carousel-item float-left w-full h-screen">
              <div className="absolute bottom-[35%] w-full">
                <div className="flex justify-center w-full">
                  <div className="relative rounded-full h-60 xl:h-80 xl:w-96 w-80">
                    <Image className="rounded-full" priority={true} src={bitcoin} layout="fill" />
                  </div>
                </div>
 
                <div className="mt-14 text-center">
                  <h1 className="text-xl max-w-[15rem] mx-auto font-semibold font-mono text-[#056424]">Cash payment on delivery service...</h1>
                </div>
              </div>
            </div>

            <div class="carousel-item float-left w-full h-screen">
              <div className="absolute bottom-[35%] w-full">
                <div className="flex justify-center w-full">
                  <div className="relative rounded-full h-60 xl:h-80 xl:w-96 w-80">
                    <Image className="rounded-full" priority={true} src={refund} layout="fill" />
                  </div>
                </div>
 
                <div className="mt-14 text-center">
                  <h1 className="text-xl max-w-[15rem] mx-auto font-semibold font-mono text-[#056424]">Flexible refund policy...</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:ml-[33.3%]">
        <div className="pt-10 sm:pt-16 lg:pt-10 xl:pt-[5rem]">
          <Link href="/">
            <div className="mx-auto cursor-pointer w-fit">
              <Logo />
            </div>
          </Link>

          <div className="mx-5 mb-20 sm:mx-auto sm:px-12 md:px-16 lg:px-12 mt-6 sm:shadow-md sm:max-w-[28rem] md:max-w-[32rem] lg:max-w-[35rem] sm:rounded-lg py-5 lg:pt-14 lg:pb-20 sm:pt-9 sm:pb-16">
            <div className="text-center text-[#464646]">
              <h1 className="text-2xl font-semibold">Reset Password</h1>

              <h3 className="font-light max-w-[22rem] text-center mx-auto mt-8 text-sm">Enter your email address below and we will send you a password reset link</h3>
            </div>

            <form className="mt-5">
              <div>
                <label className="text-xs text-[#464646]">Email</label>
                <br />
                <input autoComplete="off" className="border-2 focus:outline-[#056424] focus:bg-white text-[#464646] text-sm w-full mt-1 h-12 rounded-md px-2 placeholder:text-xs" type="email" placeholder="Enter your email address"/>
                {/* <label className="text-xs text-red-500">Email is required</label> */}
              </div>

              <div className="mt-6">
                <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="w-full bg-[#A3DC22] h-12 text-sm text-white px-3 rounded-sm transition duration-75 delay-75 ease-linear hover:shadow-md py-2 hover:bg-[#056424]">
                  Send reset otp
                </button>
              </div>

              <div>
                <p className="text-sm text-[#464646] mt-7 text-center">I remember now! <Link href="/auth/signin"><span className="text-[#A3DC22] hover:text-[#056424] hover:underline cursor-pointer">Go back</span></Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}