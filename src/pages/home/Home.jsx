import Card from "../../components/Card";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import About from "./About";
import ComprehensiveHeath from "./ComprehensiveHeath";
import WhyApnaClinic from "./WhyApnaClinic";
import OurPatients from "./OurPatients";

const Home = () => {
    return (
        <div className="bg-white">
            <div className="flex flex-col lg:flex-row justify-center lg:pl-11 lg:gap-10 py-14 lg:py-28 lg:mx-4 mx-6 custom-width:bg-red-400">
                <div className="w-auto">
                    <div className="flex flex-col mb-4">
                        <div className="flex items-center gap-4 mx-auto lg:mx-0">
                            <Heading myStyle={"text-[20px] sm:text-[25px] lg:text-[35px] xl:text-[40px] text-darkGreen font-normal md:text-[36px]"}>Your Health, Our Priority</Heading>
                            <div className="hidden lg:flex">
                                <img src="./assets/Group 15.png" alt="plus icons" className="mb-8 " />
                            </div>
                        </div>
                        <p className="para_normal font-normal mx-auto lg:mx-0">Connecting you with top healthcare providers in your area.</p>
                    </div>

                    <div className="w-auto flex justify-evenly lg:justify-normal md:justify-evenly gap-4 xs2:gap-5 lg:gap-10 xl:gap-16 cursor-pointer mb-5">
                        <Card ImgUrl={"/assets/doctors.png"} content={"Search Doctor"} imgClassName={"w-[81px] xs2:w-[91px] h-[81px] xs:w-[120px] sm:h-[100px] sm:w-[150px] md:w-[200px] md:h-[165px] lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"} />
                        <Card ImgUrl={"/assets/bed.jpeg"} content={"Search Hospital"} imgClassName={"w-[81px] xs2:w-[91px] h-[81px] xs:w-[120px] sm:h-[100px] sm:w-[150px] md:w-[200px] md:h-[165px] lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"} />
                        <Card ImgUrl={"/assets/patent.jpeg"} content={"Home Visits"} imgClassName={"w-[81px] xs2:w-[91px] h-[81px] xs:w-[120px] sm:h-[100px] sm:w-[150px] md:w-[200px] md:h-[165px] lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"} />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-14 px-4 lg:px-7 items-center bg-darkGreen w-full lg:w-[672px] xl:w-[772px] h-auto lg:h-[62px] cursor-pointer shadow-[rgba(0,_0,_0,_0.56)_0px_25px_50px_-12px]">
                        <div className="flex justify-between items-center text-white gap-5 font-normal text-[16px] lg:text-[20px] md:text-[22px] border-b-2 lg:border-b-0 lg:border-r-2 lg:pr-12 border-white mb-4 lg:mb-0">
                            <select className="bg-darkGreen px-4 lg:py-2 rounded-md w-full p-6 outline-none">
                                <option value="">Choose State</option>
                                <option value="state1">State 1</option>
                                <option value="state2">State 2</option>
                                <option value="state3">State 3</option>
                            </select>
                        </div>
                        <div className="flex justify-between items-center text-white gap-5 md:text-[22px] font-normal text-[16px] lg:text-[20px] border-b-2 lg:border-b-0 lg:border-r-2 lg:pr-12 border-white mb-4 lg:mb-0">
                            <select className="bg-darkGreen px-4 lg:py-2 rounded-md w-full lg:p-6 lg:pb-auto pb-4 outline-none">
                                <option value="">Choose City</option>
                                <option value="city1">City 1</option>
                                <option value="city2">City 2</option>
                                <option value="city3">City 3</option>
                            </select>
                        </div>
                        <div className="flex justify-between items-center text-white gap-5 md:text-[22px] font-normal text-[16px] lg:text-[20px]">
                            <select className="bg-darkGreen px-4 lg:py-2 rounded-md w-full lg:p-6 lg:pb-auto pb-6 outline-none">
                                <option value="">Doctor Specialty</option>
                                <option value="Specialty1">Specialty 1</option>
                                <option value="Specialty2">Specialty 2</option>
                                <option value="Specialty3">Specialty 3</option>
                            </select>
                        </div>
                    </div>

          <div className="w-auto flex justify-evenly lg:justify-normal md:justify-evenly gap-4 xs2:gap-5 lg:gap-10 xl:gap-16 cursor-pointer mb-5">
            <Card
              ImgUrl={"/assets/doctors.png"}
              content={"Search Doctor"}
              imgClassName={
                "w-[81px] xs2:w-[91px] h-[81px] xs:w-[120px] sm:h-[100px] sm:w-[150px] md:w-[200px] md:h-[165px] lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"
              }
            />
            <Card
              ImgUrl={"/assets/bed.jpeg"}
              content={"Search Hospital"}
              imgClassName={
                "w-[81px] xs2:w-[91px] h-[81px] xs:w-[120px] sm:h-[100px] sm:w-[150px] md:w-[200px] md:h-[165px] lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"
              }
            />
            <Card
              ImgUrl={"/assets/patent.jpeg"}
              content={"Home Visits"}
              imgClassName={
                "w-[81px] xs2:w-[91px] h-[81px] xs:w-[120px] sm:h-[100px] sm:w-[150px] md:w-[200px] md:h-[165px] lg:h-[140px] lg:w-[140px] xl:h-[160px] xl:w-[160px]"
              }
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-14 px-4 lg:px-7 items-center bg-darkGreen w-full lg:w-[672px] xl:w-[772px] h-auto lg:h-[62px] cursor-pointer shadow-[rgba(0,_0,_0,_0.56)_0px_25px_50px_-12px]">
            <div className="flex justify-between items-center text-white gap-5 font-[500] text-[16px] lg:text-[20px] md:text-[22px] border-b-2 lg:border-b-0 lg:border-r-2 lg:pr-12 border-white mb-4 lg:mb-0">
              <select className="bg-darkGreen px-4 lg:py-2 rounded-md w-full p-6 outline-none">
                <option value="">Choose State</option>
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
              </select>
            </div>
            <div className="flex justify-between items-center text-white gap-5 md:text-[22px] font-[500] text-[16px] lg:text-[20px] border-b-2 lg:border-b-0 lg:border-r-2 lg:pr-12 border-white mb-4 lg:mb-0">
              <select className="bg-darkGreen px-4 lg:py-2 rounded-md w-full lg:p-6 lg:pb-auto pb-4 outline-none">
                <option value="">Choose City</option>
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
              </select>
            </div>
            <div className="flex justify-between items-center text-white gap-5 md:text-[22px] font-[500] text-[16px] lg:text-[20px]">
              <select className="bg-darkGreen px-4 lg:py-2 rounded-md w-full lg:p-6 lg:pb-auto pb-6 outline-none">
                <option value="">Doctor Specialty</option>
                <option value="Specialty1">Specialty 1</option>
                <option value="Specialty2">Specialty 2</option>
                <option value="Specialty3">Specialty 3</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center items-center my-8 lg:my-11">
            <Button linkto={"/find-result"}>Find Result</Button>
          </div>
        </div>

        <div className="w-auto flex justify-center items-center lg:mr-11">
          <div className="max-h-[597.51px] flex items-end lg:w-[261.67px] md:w-[370.67px] w-[300px] xl:w-[437.67px]">
            <img
              src="assets/Group 3.png"
              alt="Doctor"
              className="object-cover "
            />
          </div>
        </div>
      </div>

      <About />
      <ComprehensiveHeath />
      <WhyApnaClinic />
      <OurPatients />
    </div>
  );
};

export default Home;
