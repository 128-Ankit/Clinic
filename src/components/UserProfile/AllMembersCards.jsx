import React from 'react'
import { HiDotsVertical } from "react-icons/hi";
import Data from "../../data/allMembersProfile.json";



const AllMembersCards = () => {
    return (
        <div className='flex flex-wrap xl:justify-between justify-center lg:mx-8 gap-6'>
            {
                Data.map((data) => {
                    return (
                        <div className="flex justify-between p-3 border-2 rounded-xl max-w-[377px] w-full">
                            <img src={data.profileImg} alt="user profile" className="rounded-full max-w-[100px] max-h-[100px] w-full h-full" />
                            <div className="mt-2">
                                <h1 className="para_normal font-medium">{data.userName}</h1>
                                <p className="para_normal font-normal">{data.age}, {data.gender}, {data.bloodGroup}</p>
                            </div>
                            <HiDotsVertical className="para_normal cursor-pointer" />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default AllMembersCards
