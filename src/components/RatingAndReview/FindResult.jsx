import Button from "../Button"
import { FaChevronDown } from "react-icons/fa";



const FindResult = () => {
  return (
    <div className="w-full flex justify-center items-center bg-[#027D5D40] lg:h-[105px]">
      <div className="max-w-[978px] w-full flex lg:flex-row flex-col gap-4 justify-between rounded-md lg:bg-white bg-[#027D5D40] lg:mx-0 lg:my-0 mx-5 my-2">

        <div className="w-full flex lg:flex-row md:flex-row sm:flex-row flex-col justify-between lg:justify-start gap-2 lg:gap-[1.5rem] rounded-md px-2 xs:px-6 sm:px-8 md:px-10 lg:px-0 lg:justify-none lg:bg-white md:bg-white sm:bg-white pb-1 pt-2">
          <div className="bg-white rounded-md">
            <p className="para_normal strong_text pl-4 lg:pl-0 text-center">Choose State</p>
            <div className="flex gap-1 lg:gap-5 md:gap-5 items-center justify-center ml-6">
              <h1 className="para_normal font-normal w-auto">Uttar Pradresh</h1>
              <FaChevronDown className="lg:text-[20px] md:text-[25px] text-[20px] xs:text-[19px] text-[#8B8B8B]" />
            </div>
          </div>
          <div className="border-r-2 border-[#818181]"></div>
          <div className="bg-white rounded-md">
            <p className="para_normal strong_text text-center">Choose City</p>
            <div className="flex gap-1 lg:gap-5 md:gap-5 items-center justify-center ml-3">
              <h1 className="para_normal font-normal">Prayagraj</h1>
              <FaChevronDown className="lg:text-[20px] md:text-[25px] sm:text-[20px] text-[22px] xs:text-[19px] text-[#8B8B8B]" />
            </div>
          </div>
        </div>

        <div className="lg:flex border-r-2 border-[#818181] hidden"></div>

        <div className="w-full flex lg:flex-row md:flex-row items-center sm:flex-row flex-col gap-4 justify-between rounded-md lg:bg-white md:bg-white sm:bg-white px-2 xs:px-6 pb-2">
          <div className="bg-white w-full rounded-md mx-5 flex flex-col md:items-start sm:items-start">
            <p className="para_normal strong_text text-center">Doctor Specialty</p>
            <div className="flex items-center justify-center gap-1 lg:gap-5 md:gap-5">
              <h1 className="para_normal font-normal">Surgery</h1>
              <FaChevronDown className="lg:text-[20px] md:text-[25px] sm:text-[20px] text-[22px] xs:text-[19px] text-[#8B8B8B]" />
            </div>
          </div>

          <div className='w-full'>
            <Button myClass={"w-full"} textSize={"text-[14px] sm:text-[17px] md:text-[17px] lg:text-[24px]"} active={1} linkto={"/info"}>Find Result</Button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FindResult
