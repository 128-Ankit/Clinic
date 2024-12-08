import React from "react";
import { HiDotsVertical } from "react-icons/hi";
import AllMembersCards from "./AllMembersCards";
import Data from "../../data/allMembersProfile.json";

console.log(Data);


const AllMembers = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between  border-b-[1px] border-[#000000] pb-2">
        <h2 className="para_normal font-medium text-darkGreen">All Members</h2>
        <button className="bg-darkGreen text-white px-6 py-2 rounded">
          Add Now
        </button>
      </div>
      <div className="">
        <AllMembersCards />
      </div>
    </div>
  )
};

export default AllMembers;
