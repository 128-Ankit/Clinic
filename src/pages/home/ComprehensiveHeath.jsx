import Heading from "../../components/Heading";
import Card from "../../components/ComprehensiveCard";


const ComprehensiveHeath = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:mt-10 md:pt-16 relative max-w-[1151px] mx-auto pt-3">
      <div className="lg:pb-10 pt-2">
        <Heading isCenter={true} myStyle={"text-[20px] text-center text-darkGreen font-normal md:text-[30px] lg:pb-8 lg:text-[40px]"}>
          Comprehensive Healthcare Services Tailored to You
        </Heading>
        <p className="para_normal font-normal text-center text-[#1e1e1e93] py-3 mx-2">At ApnaClinic, we offer a full range of healthcare services to meet your needs. From general health check-ups to specialized care, our team of qualified professionals is dedicated to providing the best possible treatment.</p>
      </div>

      <div className="absolute top-[48%] left-[8%] hidden lg:flex lg:top-[44%] lg:left-[304px] xl:left-[284px] md:top-[50%] md:left-[26%] z-0">
        <img src="./assets/Ellipse 10.png" alt="ellipse-10" className="w-[87px] h-[87px] md:w-[173px] md:h-[164px] lg:w-[193px] lg:h-[184px]"/>
      </div>

      <div className="flex lg:flex-row md:flex-row flex-col gap-8 lg:gap-10 xl:gap-20 cursor-pointer mb-5 mt-16 z-10">
        <Card ImgUrl={"/assets/Rectangle 9.png"} content={"General Check-ups"} imgClassName={"rounded-md lg:w-[1062px] lg:h-[222px]"} />
        <Card ImgUrl={"/assets/Rectangle 10.png"} content={"Specialist Consultation"} imgClassName={"rounded-md lg:w-[1062px] lg:h-[222px]"} />
        <Card ImgUrl={"/assets/Rectangle 11.png"} content={"Diagnostic Services"} imgClassName={"rounded-md lg:w-[1062px] lg:h-[222px]"} />
      </div>
    </div>
  )
}

export default ComprehensiveHeath;