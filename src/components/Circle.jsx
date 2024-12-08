
const Circle = ({ImgUrl,heading}) => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="bg-darkGreen rounded-full lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px] flex items-center justify-center">
                    <img src={ImgUrl} alt="Physiotherapy" />
                </div>
                <h1 className="lg:w-[246px] mt-5 text-[15px] lg:text-[25px] md:text-[20px] font-medium text-center mx-auto">{heading}</h1>
            </div>
        </div>
    )
}

export default Circle
