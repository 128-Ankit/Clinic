
const Cards = ({ UserName, ImgUrl, content }) => {
  return (
    <div>
      <div className=" max-w-[512px] w-auto min-w-[150px] h-auto border-2 p-6 gap-8 rounded-2xl bg-white">
        <div className="flex items-center justify-start gap-5">
          <div className="w-[45px] h-[45px] lg:w-[70px] lg:h-[70px] rounded-full flex items-center justify-center">
            <img src={ImgUrl} alt="profile" />
          </div>
          <h2 className="text-[20px] lg:text-[25px] font-normal">{UserName}</h2>
        </div>
        <p className="text-[15px] sm:text-[15px] md:text-[18px] xl:text-[25px] font-normal text-start pt-2 text-[#4B4B4B]">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Cards
