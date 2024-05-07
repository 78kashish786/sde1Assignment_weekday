import React from 'react'
import { RiChat1Fill2 } from "react-icons/ri";
function HeaderComponent() {
  return (
    <div className=' sticky top-0   bg-white z-5 py-3 px-4 md:px-8  flex justify-between items-center border-b border-gray-300  shadow-md '>
      <h1 className='text-2xl font-semibold'>👏 Kashish</h1>
      <button className='rounded-full bg-green-300 p-2 text-xl'>
        <RiChat1Fill2 color='white'/>
        </button>
    </div>
  )
}

export default HeaderComponent
