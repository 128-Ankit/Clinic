import React, { useState } from 'react';
import ReviewData from "../../data/reviewsList.json";

console.log(ReviewData);

const ReviewsCards = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const ReviewDataPerPage = 3;

    const indexOfLastReview = currentPage * ReviewDataPerPage;
    const indexOfFirstReview = indexOfLastReview - ReviewDataPerPage;

    const currentReviewData = ReviewData.slice(indexOfFirstReview, indexOfLastReview);

    const totalPages = Math.ceil(ReviewData.length / ReviewDataPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="">
            {currentReviewData.map((data, index) => (
                <div key={index} className='lg:p-8 md:p-8 sm:p-0 p-0 lg:pt-0 md:pt-0 sm:pt-4 pt-4 gap-8 bg-white max-h-[280px] h-auto'>
                    <div className='border-b-[1px] border-[#000000]'>
                        <div className="flex items-center justify-start gap-5 pb-2">
                            <img src={data.image} alt="userImg" className='w-[45px] h-[45px] xl:w-[70px] xl:h-[70px] rounded-full flex items-center justify-center' />
                            <h1 className="text-[16px] xl:text-[20px] md:text-[20px] font-medium">{data.name}</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={data.ratingImg} alt="starts" className='xl:w-auto md:w-auto w-[100px]'/>
                            <p className='text-[15px] xl:text-[20px] md:text-[20px] font-normal'>{data.rating}</p>
                            <p className='text-[14px] xl:text-[20px] md:text-[20px] font-normal'>{data.dateAndTime}</p>
                        </div>
                        <p className='text-[17px]'>{data.review}</p>
                        <p className='text-[12px] xl:text-[17px] md:text-[17px] pb-2 font-display font-medium'>{data.reviewContent}<span className="text-darkGreen cursor-pointer font-medium">View more</span></p>
                    </div>
                </div>
            ))}
            <div className="flex justify-between items-center mt-4 pl-4">
                <button
                    onClick={prevPage}
                    className={`border-2 border-darkGreen text-darkGreen text-[15px] rounded-md font-medium px-5 py-1 ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === 1}
                >
                    Prev
                </button>

                <p className='xl:text-[18px] w-auto md:text-[18px] font-medium '>Page {currentPage} of {totalPages}</p>

                <button
                    onClick={nextPage}
                    className={`border-2 bg-darkGreen text-white text-[15px] px-5 py-1 rounded-md font-medium ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ReviewsCards;