import React from 'react'

const TimeSlot = ({ slot, bgColor }) => {
  return (
    <div className='max-w-[960px] w-auto h-auto border-[1px] border-[#00000040] rounded-lg lg:mx-auto mb-8 cursor-pointer mx-4'>
      <div className='lg:m-5 m-3'>
        <div className='flex gap-3 mb-2'>
          <p className='para_normal font-medium'>{slot}</p>
          <img src="./assets/Weather.png" alt="wetherIMG" className='lg:w-[35px] lg:h-[35px] w-[25px] h-[25px]' />
        </div>

        <div className='flex flex-wrap lg:gap-8 lg:pt-4 pt-1 gap-4'>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal ${bgColor ? ("bg-darkGreen text-white") : ("text-[#1E1E1E]")}  border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
          <p className={`w-auto lg:p-3 p-2 para_normal font-normal text-[#1E1E1E] border-[1px] border-[#1E1E1E80] text-center rounded-lg flex items-center justify-center`}>10 : 00 AM</p>
        </div>
      </div>
    </div>
  )
}

export default TimeSlot
