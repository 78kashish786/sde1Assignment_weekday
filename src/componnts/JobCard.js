import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { IoIosCloseCircle } from "react-icons/io";

function JobCard ({data}) {
    const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:'400px',
    },
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <div className=' z-1 py-5 px-3 border rounded-xl w-[370px] space-y-3 shadow-md hover:shadow-xl   md:m-5'>
        {/* History of job  */}
        <div className='flex gap-1 items-center text-[10px] text-gray-600 p-1 border rounded-full w-[50%] shadow-sm'>
          <img
            src={require('../Assets/timeemoji.png')}
            alt='time-emoji'
            className='h-3 w-5'
          />
          <span>Posted 4 Days Ago</span>
        </div>

        {/* Basic Information about the job */}
        <div>
          <div className='flex gap-2 py-1'>
            <div>
              <img src={data.logoUrl} className='h-10 w-15' alt='company logo' />
            </div>
            <div className=''>
              <h2 className='text-sm font-semibold text-gray-400'>
                {data.companyName}
              </h2>
              <h3 className='text-[14px] font-[300]'>{data.jobRole}</h3>
              <h5 className='text-[12px] font-[400]'>
                {data.location}| Exp:5.5 years
              </h5>
            </div>
          </div>
          {/* Used conitiond on below h1 tag data to display accordingly  */}
          <h1 className='py-1 text-[16px] font-[400] text-gray-500 px-1'>
            Estimated Salary :{data.salaryCurrencyCode === 'USD' ? '$' : '₹'}
            {data.minJdSalary}
            {data.minJdSalary && '-'}
            {data.maxJdSalary} LPA
          </h1>
        </div>

        {/* Details about the Company */}
        <div className='py-2'>
          <h1 className='font-semibold text-[16px]'>About Company</h1>
          <div>
            <h3 className='font-bold text-sm'>About us</h3>
            <p className='font-[9px] font-[400] text-gray-500 leading-tight'>
              {data.jobDetailsFromCompany && data.jobDetailsFromCompany.substring(0,370)}{' '}
            </p>
          </div>
          <button onClick={()=>openModal()} className='w-full  hover:font-semibold text-purple-600'>View More</button>
        </div>

        {/* Skills and Minimum Exp */}
        <div className='space-y-1'>
          <div className='space-y-1'>
            <h1 className='text-sm font-bold text-gray-400'>Skills</h1>
            <ul className='flex gap-4  text-[9px] text-blue-600 '>
              <li className='bg-blue-200 rounded-full py-1 px-2'>
                React Native
              </li>
              <li className='bg-blue-200 rounded-full py-1 px-2'>
                React Native
              </li>
              <li className='bg-blue-200 rounded-full py-1 px-2'>
                React Native
              </li>
            </ul>
          </div>
          <div>
            <h1 className='text-sm font-bold text-gray-400'>
              Minimum Experience
            </h1>
            <h4 className='font-[300] text-md'>{data.minExp} years  </h4>
          </div>
        </div>

        {/* Easy Applybutton */}
        <div >
          <Link
            to={`${data.jdLink}`}
            
            className=' hover:bg-cyan-100 w-full py-2 border mt-5 bg-cyan-300 rounded-xl flex  items-center justify-center font-semibold'
          >
            <img
              className='h-auto w-10'
              src={require('../Assets/thunder-emoji.png')}
              alt='thinder emoji'
            />{' '}
            Easy Apply
          </Link>
        </div>
      </div>
     
        <ReactModal  contentLabel="Example Modal"  isOpen={modalIsOpen} style={customStyles} >
        <div className='flex justify-between items-start mb-5  '><div>
            <img src={data.logoUrl} className='w-[50px] h-[50px]'/>
            <h1 className='text-2xl font-semibold'>{data.jobRole}-{data.companyName}</h1>
        </div>
        <button onClick={()=>closeModal()}><IoIosCloseCircle className='hover:text-blue-500' size={30}/></button>
        
        </div>
        <ul className='flex gap-4  text-[9px] text-blue-600 '>
              <li className='bg-blue-200 rounded-full py-1 px-2'>
                React Native
              </li>
              <li className='bg-blue-200 rounded-full py-1 px-2'>
                React Native
              </li>
              <li className='bg-blue-200 rounded-full py-1 px-2'>
                React Native
              </li>
            </ul>   
        <h2 className='txt-xl font-semibold'>Job Description</h2>
        <h1>{data?.jobDetailsFromCompany}</h1>
        <div >
          <Link
            to={`${data.jdLink}`}
            
            className='hover:bg-cyan-100 w-full py-2 border mt-5 bg-cyan-300 rounded-xl flex  items-center justify-center font-semibold'
          >
            <img
              className='h-auto w-10'
              src={require('../Assets/thunder-emoji.png')}
              alt='thinder emoji'
            />{' '}
            Easy Apply
          </Link>
        </div>
      </ReactModal>
     
      
    </>
  )
}

export default JobCard;