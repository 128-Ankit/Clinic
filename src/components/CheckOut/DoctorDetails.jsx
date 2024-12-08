import React from 'react'

const DoctorDetails = () => {
    return (
        <div className='max-w-[264px] w-auto h-auto flex flex-col gap-6 lg:ml-12 mx-auto mb-24 bg-white rounded-2xl border-[1px] border-darkGreen overflow-hidden md:ml-0 ml-3'>
            <div>
                <div className="relative">
                    <img src="./assets/Rectangle 22.png" alt="drImg" className='lg:w-[264px] lg:h-[225px] w-[292px] h-[225px]' />
                    <div>
                        <img src="./assets/Rectangle 164.png" alt="verified" className='absolute top-0 xl:w-[65px] md:w-[60px] sm:w-[50px] w-auto' />
                        <p className='absolute top-[12px] text-white rotate-[-45deg] lg:text-[12px] md:text-[12px] text-[9px]'>Verified</p>
                    </div>
                </div>
                <h1 className='text-[18px] font-normal pl-5 pt-2'>Dr. Ruhani Singh</h1>
                <p className='lg:text-[15px] lg:flex font-normal pl-5 hidden'>Dermatologist | 16+ Yrs. Exp.</p>
            </div>

            <div className=' w-auto pb-5 mb-3 h-auto rounded-2xl lg:border-2 md:border-2 mx-auto lg:shadow-md md:shadow-md flex flex-col gap-3 lg:mx-3 md:mx-3'>
                <div>
                    <p className='pl-5 font-normal pt-3'>Appointment Details</p>
                    <div className='border-b-[1px] border-black mx-4 pt-1'></div>
                </div>
                <div className='flex gap-4 items-center pl-4'>
                    <img src="./assets/Clinic.png" alt="Clinic" className='w-[30px] h-[30px]' />
                    <p className='text-[15px] font-normal'>Clinic Visit</p>
                </div>

                <div className='flex gap-4 items-center pl-4'>
                    <img src="./assets/Calendar.png" alt="Calendar" className='w-[30px] h-[30px]' />
                    <p className='text-[15px] font-normal'>Today, 10:15 AM</p>
                </div>

                <div className='flex gap-4 pl-4'>
                    <img src="./assets/Location.png" alt="Location" className='w-[30px] h-[30px]' />
                    <p className='text-[15px] font-normal'>
                        40, A, Neem Sarai Rd, Mundera Mandi, Dhoomanganj, Prayagraj, Uttar Pradesh 211011
                    </p>
                </div>
            </div>

        </div>
    )
}

export default DoctorDetails
