import React, { useState } from 'react';
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

const title = [
    { title: "Specialist" },
    { title: "Experience" },
    { title: "Free" },
    { title: "Language" },
    { title: "Rating" }
];

const FilterDoctors = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='max-w-[941px] w-full flex lg:px-5 md:px-4 px-0 justify-between'>
            <div className='lg:hidden flex flex-col md:flex-row lg:flex-row items-center mr-3'>
                <button onClick={toggleMenu} className='text-darkGreen'>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

 
            <div className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} flex-col lg:flex-row justify-between w-full lg:w-auto`}>
                <div className='flex flex-col md:flex-row lg:flex-row lg:gap-4 md:gap-4 gap-0'>
                    {title.map((item, index) => (
                        <div key={index} className='border-[1px] h-[30px] border-darkGreen px-3 rounded-lg text-darkGreen font-normal my-4 cursor-pointer'>
                            <div className='flex justify-center items-center gap-3 pt-[2px]'>
                                <p>{item.title}</p>
                                <FaChevronDown />
                            </div>
                        </div>
                    ))}
                </div> 
            </div>  
            <div className='lg:flex justify-center items-center hidden'>
                <input
                    type="search"
                    placeholder='type here...'
                    className='lg:w-[206px] lg:h-[33px] text-[15px] text-darkGreen pl-5 rounded-xl border-[1px] border-darkGreen'
                />
            </div>
        </div>
    );
};

export default FilterDoctors;
