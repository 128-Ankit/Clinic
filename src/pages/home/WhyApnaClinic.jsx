import Heading from "../../components/Heading"
// import Circle from "../../components/Circle"

const WhyApnaClinic = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-9 pt-[4rem] pb-10 max-w-[1151px] mx-auto">
            <div className="absolute lg:flex hidden lg:left-[-27px] xl:left-[-54px] lg:top-[118rem]">
                <img src="./assets/Group 16.png" alt="" className="lg:w-[251.28px] lg:h-[464px]" />
            </div>
            <Heading isCenter={true}>Why ApnaClinic?</Heading>
            <div className="flex lg:flex-row flex-col lg:gap-40 md:gap-8 gap-14 pt-4">

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gradient-to-b from-custom_green_1 to-custom_green_2 lg:h-[150px] lg:w-[162px] md:w-[142px] md:h-[130px] w-[110px] h-[100px] rounded-full flex justify-start items-center">
                        <div className="bg-darkGreen rounded-full lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px] w-[100px] h-[100px] flex items-center justify-center">
                            <img src="/assets/Physiotherapy.png" alt="Physiotherapy" className="lg:w-auto lg:h-auto md:w-auto md:h-auto w-[60px] h-[60px]"/>
                        </div>
                    </div>
                    <h1 className="para_normal font-normal mt-5 text-center mx-auto">Qualified Healthcare Providers</h1>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gradient-to-b from-custom_green_1 to-custom_green_2 lg:h-[145px] lg:w-[180px] md:w-[152px] md:h-[130px] w-[120px] h-[100px] rounded-full flex justify-center items-center">
                        <div className="bg-darkGreen rounded-full lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px]  w-[100px] h-[100px] flex items-center justify-center">
                            <img src="/assets/Easy.png" alt="Physiotherapy" className="lg:w-auto lg:h-auto md:w-auto md:h-auto w-[60px] h-[60px]" />
                        </div>
                    </div>
                    <h1 className="para_normal font-normal mt-5 text-center mx-auto">Qualified Healthcare Providers</h1>
                </div>

                <div className="flex flex-col justify-center items-center">
                    <div className="bg-gradient-to-b from-custom_green_1 to-custom_green_2 lg:h-[150px] lg:w-[162px] md:w-[142px] md:h-[130px] w-[110px] h-[100px] rounded-full flex justify-end items-center">
                        <div className="bg-darkGreen rounded-full lg:w-[150px] lg:h-[150px] md:w-[130px] md:h-[130px] w-[100px] h-[100px] flex items-center justify-center">
                            <img src="/assets/Location1.png" alt="Physiotherapy"  className="lg:w-auto lg:h-auto md:w-auto md:h-auto w-[60px] h-[60px]"/>
                        </div>
                    </div>
                    <h1 className="para_normal font-normal mt-5 text-center mx-auto">Accessible Locations</h1>
                </div>



                {/* <div className="w-[150px] h-[150px] bg-gradient-to-b from-custom_green_1 to-custom_green_2 rounded-full relative left-14"></div> */}

            </div>
        </div>
    )
}

export default WhyApnaClinic
