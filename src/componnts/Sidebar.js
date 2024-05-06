import React from 'react'

function Sidebar({color, imgsrc}) {
  return (
    <div className='w-[100%] border-x-2 h-[100vw] py-5 px-10 sticky top-0'>
        <img className='sticky top-5 w-[50px] h-[50px] rounded-full' src={imgsrc} alt="logos"/>
    </div>
  )
}

export default Sidebar
