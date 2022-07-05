import Product from "@components/product/product"

export default function MenClothing() {
  return(
    <div className="w-[90%] max-w-[85rem] 2xl:max-w-[90rem] mx-auto mt-3 sm:mt-5 xl:mt-6">
      <div>
        <h1 className="text-[#4A5568] text-center font-mono font-bold text-2xl xl:text-3xl">CLOTHING</h1>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4">
        <Product />
      </div>
    </div>
  )
}