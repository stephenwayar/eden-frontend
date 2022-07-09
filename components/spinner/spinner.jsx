import { Icon } from '@iconify/react'

export default function Spinner(){
  return(
    <div className="w-full h-screen bg-[#f8fbf0]">
      <div>
        <div className="animate-spin w-fit mx-auto">
          <Icon icon="ei:spinner-3" color="#4a5568" width="100" height="100" />
        </div>

        <div className='mx-auto text-center'>
          <h1 className='text-[#4a5568] font-light text-2xl'>Page loading...</h1>
        </div>
      </div>
    </div>
  )
}