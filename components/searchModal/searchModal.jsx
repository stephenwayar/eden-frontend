import Image from "next/image"
import cancel from '../../public/assets/images/Cancle Button.png'

export default function SearchModal({ closeModal }) {
  return(
    <div>
      <div className="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition delay-75 duration-75 ease-linear fade-in">
        <div className="relative w-auto my-6 mx-auto max-w-[40rem] xl:max-w-[53rem]">
          <div className="mx-6 md:mx-14 mt-12">
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <Image src={cancel} height={25} width={25}/>
              </button>
            </div>

            <div className="pt-3 mt-4 pb-20 mb-14 bg-white shadow-md rounded-2xl border border-gray-400">
            </div>
          </div>
        </div>
      </div>

      <div className="opacity-50 fixed inset-0 z-40 bg-black transition delay-75 duration-75 ease-linear fade-in"></div>
    </div>
  )
}