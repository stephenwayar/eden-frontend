import { Icon } from '@iconify/react'
import SearchModal from '@components/searchModal/searchModal'
import { useState } from 'react'

export default function SearchBar() {
  const [showModal, setShowModal] = useState(false)

  const popModal = () => setShowModal(true)
  const closeModal = () => setShowModal(false)

  return(
    <div>
      <button onClick={popModal} className='w-full rounded-md shadow-md border-2 border-transparent focus:ring-[#056424] active:ring-[#056424] active:ring focus:ring focus:ring-offset-2 active:ring-offset-2'>
        <div className="p-3 flex space-x-3 italic text-[#4A5568]">
          <Icon icon="akar-icons:search" color="#056424" width="23" height="23" />

          <p>Search Product...</p>
        </div>
      </button>

      { showModal ? (<SearchModal closeModal={closeModal} />) : null }
    </div>
  )
}