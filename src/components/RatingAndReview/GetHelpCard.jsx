import Button from "../Button";

const GetHelpCard = () => {
  return (
    <div className='max-w-[923px] w-auto h-auto flex flex-col gap-5 border-[1px] border-solid p-4 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:mx-auto mx-6 mt-6'>
      <div className='flex lg:gap-6 gap-2'>
        <div><img src="./assets/Hospital.png" alt="hospital"/></div>
        <div>
          <h2 className='lg:text-[30px] sm:text-[18px] text-[12px] font-medium'>Narayan Swaroop Hospital</h2>
          <p className='lg:text-[20px] sm:text-[17px] text-[12px] font-normal'>40, A, Neem Sarai Rd, Mundera Mandi, Dhoomanganj, Prayagraj, Uttar Pradesh 211011</p>
          <p className='lg:text-[20px] sm:text-[17px] text-[12px] font-normal'>4.8  <span className="text-darkGreen">★</span> 10 Rating</p>
        </div>
        <img src="./assets/Share.png" alt="ShareIcon" className='xs:w-[30px] xs:h-[30px] w-[18px] h-[18px] cursor-pointer flex'/>
      </div>
      <div className="flex justify-between gap-4 items-center lg:gap-0 lg:mx-10">
          <Button myClass={"w-auto"} textSize={"lg:text-[22px] md:text-[17px] sm:text-[14px] text-[10px]"}>Call Clinic</Button>
          <Button myClass={"w-auto"} textSize={"lg:text-[22px] md:text-[17px] sm:text-[14px] text-[10px]"} active={1}>Book Now</Button>
      </div>
    </div>
  )
}

export default GetHelpCard
