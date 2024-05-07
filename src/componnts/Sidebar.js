import React from 'react'

function Sidebar({color, imgsrc}) {
  return (
    <div className={`w-[100%] border-x-2 h-[100vw] ${color?color:`bg-white`} py-5 px-10 sticky top-0 hidden md:block`}>
        <div className=''>
        <img className='object-cover sticky top-5 w-[50px] h-[50px] rounded-full' src={imgsrc} alt="logos"/>
        </div>
    </div>
  )
}

export default Sidebar
