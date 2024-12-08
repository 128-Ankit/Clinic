import React, { useState } from 'react';
import doctors from "../../data/doctorsList.json";
import Button from '../Button';
import FilterDoctors from './FilterDoctors';

const DoctorList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const doctorsPerPage = 3;

    const indexOfLastDoctor = currentPage * doctorsPerPage;
    const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;

    const currentDoctors = doctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

    const totalPages = Math.ceil(doctors.length / doctorsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="w-full flex flex-col gap-6 items-center px-3 justify-center py-3 mx-auto shadow-[0px_0px_26px_0px_#00000040] bg-white my-8 lg:w-[980px] lg:rounded-2xl lg:my-8">
            <FilterDoctors />
            {currentDoctors.map((doctors, index) => (
                <div key={index} className='w-full max-w-[941px] min-w-[250px] mx-5 pr-3 h-auto shadow-[0px_0px_10px_0px_#00000040] rounded-2xl overflow-hidden lg:mx-0'>
                    <div className='flex flex-col justify-between lg:flex-row md:flex-row relative gap-4'>
                        <div className='flex gap-[6px] lg:gap-7 md:gap-5 sm:gap-4'>
                            <div>
                                <div className='relative'>
                                    <img src={doctors.image} alt={doctors.name} className='max-w-[220px] max-h-[204px] w-full' />
                                    <div>
                                        <img src="./assets/Rectangle 164.png" alt="verified" className='absolute top-0 xl:w-[65px] md:w-[60px] sm:w-[50px] w-auto' />
                                        <p className='absolute top-[12px] text-white rotate-[-45deg] lg:text-[12px] md:text-[12px] text-[9px]'>Verified</p>
                                    </div>
                                </div>
                                <p className='bg-[#027d5c3b] text-darkGreen text-center p-1 text-[15px] sm:text-[18px] md:text-[16px] xl:text-[20px] font-normal lg:rounded-bl-lg'>{doctors.experience}</p>
                            </div>
                            <div className='flex flex-col gap-0 mr-4 pt-1 lg:mr-0 lg:pt-5 md:pt-4'>
                                <h1 className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-semibold'>{doctors.name}</h1>
                                <p className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-normal'>{doctors.qualification}</p>
                                <p className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-normal'>{doctors.specialty}</p>
                                <p className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-normal'>{doctors.specialtyContent}</p>
                                <p className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-normal'>{doctors.location}</p>
                                <div>
                                    <span className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-normal'>{doctors.ratings}</span>
                                    <span className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[20px] font-normal'>{doctors.ratingCount}</span>
                                </div>
                                <div>
                                    <img src="./assets/Group 29.png" alt="stars" className='w-auto lg:h-[25px]' />
                                </div>
                                <p className='text-[15px] sm:text-[18px] md:text-[18px] xl:text-[30px] font-normal'>₹{doctors.fee}</p>
                            </div>
                        </div>

                        <div className='flex flex-col justify-center items-center lg:justify-center lg:items-end md:justify-start md:items-end'>
                            <img src="./assets/Share.png" alt="ShareIcon" className='w-[20px] h-[20px] sm:w-[30px] sm:h-[30px] lg:w-[30px] lg:h-[30px] cursor-pointer flex absolute right-0 top-0 mt-2' />
                            <div className='flex gap-[9px] flex-col w-full mb-5 lg:mb-0 lg:mt-[75px] md:mt-[82px] md:mb-0'>
                                <Button myClass={"w-full font-normal mx-2"} textSize={"text-[14px] sm:text-[17px] md:text-[17px] lg:text-[25px]"} linkto={"/info"}>Check Availability</Button>
                                <Button myClass={"md:w-[200px] lg:w-[300px] w-full font-normal mx-2"} textSize={"text-[14px] sm:text-[17px] md:text-[17px] lg:text-[25px]"} active={1} linkto={"/info"}>Book Appointment</Button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex justify-between items-center mt-4 w-full max-w-[967px] px-5">
                <button
                    onClick={prevPage}
                    className={`border-2 border-darkGreen text-darkGreen text-[15px] sm:text-[15px] md:text-[17px] lg:text-[21px] px-5 py-1 rounded-md font-normal ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                <p className='text-[15px] sm:text-[15px] md:text-[17px] lg:text-[21px] font-normal max-w-[120px] md:w-[120px]'>Page {currentPage} of {totalPages}</p>

                <button
                    onClick={nextPage}
                    className={`border-2 bg-darkGreen text-white text-[15px] sm:text-[15px] md:text-[17px] lg:text-[21px] px-5 py-1 rounded-md font-normal ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    )
};

export default DoctorList;
