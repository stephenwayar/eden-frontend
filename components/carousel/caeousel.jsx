import Image from "next/image"
import mensbanner from "../../public/assets/images/mens-banner.png"
import mensbanner2 from "../../public/assets/images/mens-banner-2.jpeg"
import womensbanner from "../../public/assets/images/womens-banner.png"
import womensbanner2 from "../../public/assets/images/womensbanner2.png"
import kidsbanner from "../../public/assets/images/kidsbanner.jpeg"

export default function Carousel() {
  return(
    <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full">
          <div className="w-full h-52 sm:h-72 md:h-[22rem] lg:h-[29rem] xl:h-[43rem]">
            <Image
              layout="fill"
              priority={true}
              src={mensbanner}
              className="block"
              alt="..."
            />
          </div>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Wardrobe Refresh</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="w-full h-52 sm:h-72 md:h-[22rem] lg:h-[29rem] xl:h-[43rem]">
            <Image
              priority={true}
              layout="fill"
              src={womensbanner}
              className="block"
              alt="..."
            />
          </div>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl text-[#3e3c3c]">Ladies drip</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="w-full h-52 sm:h-72 md:h-[22rem] lg:h-[29rem] xl:h-[43rem]">
            <Image
              layout="fill"
              priority={true}
              src={kidsbanner}
              className="block"
              alt="..."
            />
          </div>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl text-[#3e3c3c]">Stylish Kids</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="w-full h-52 sm:h-72 md:h-[22rem] lg:h-[29rem] xl:h-[43rem]">
            <Image
              layout="fill"
              priority={true}
              src={womensbanner2}
              className="block"
              alt="..."
            />
          </div>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Girls, top, girls!</h5>
          </div>
        </div>
        <div className="carousel-item relative float-left w-full">
          <div className="w-full h-52 sm:h-72 md:h-[22rem] lg:h-[29rem] xl:h-[43rem]">
            <Image
              layout="fill"
              priority={true}
              src={mensbanner2}
              className="block"
              alt="..."
            />
          </div>
          <div className="carousel-caption hidden md:block absolute text-center">
            <h5 className="text-xl">Kings Fashion</h5>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}