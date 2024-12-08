import React from 'react'

const SelectMember = () => {
  return (
    <div className='max-w-[690px] w-auto lg:rounded-xl lg:border-2 p-8 md:pt-0 lg:shadow-md'>
        <h1 className='lg:text-[25px] text-[20px] font-normal border-b-2 border-[#000000] mb-4 pb-1'>Select Member</h1>
        <div>
            <h1 className='text-darkGreen text-[20px] font-normal pb-1'>Who is patient?</h1>
            <p className='text-[15px] font-normal'>Make sure to add valid patient details, it will be reflected on Prescription and Invoice</p>
            <div className='flex gap-10 pt-5'>
                <button className='bg-darkGreen text-white rounded-lg w-[106px] h-[59px] text-center'>
                    <p className='lg:text-[20px]'>Rohan</p>
                    <p className='text-[15px]'>male 23</p>
                </button>
                <button className='text-darkGreen lg:text-[20px]'>+Add New</button>
            </div>
        </div>
    </div>
  )
}

export default SelectMember
