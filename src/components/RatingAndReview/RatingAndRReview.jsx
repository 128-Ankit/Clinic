import Button from "../Button";
import { Link } from "react-router-dom";
import DoctorInfoCard from "./DoctorInfoCard";



const RatingAndRReview = () => {
  return (
    <div>
      <div className="xl:w-[1056px] h-auto mx-auto flex justify-center my-6 pb-7">
        <div className="pt-7">
          <DoctorInfoCard />
          <div className="flex lg:flex-row md:flex-row sm:flex-row gap-4 flex-col justify-between items-center lg:w-[978px] md:w-[750px] sm:w-[627px] mx-auto">
            <div className="flex flex-col gap-4 pt-6">
              <Button active={1} myClass={"lg:w-[331px] lg:h-[55px] lg:text-[25px] font-normal w-auto"} linkto={"/book_appointment"}> Appointment Fee: ₹200</Button>
              <Button myClass={"lg:w-[331px] lg:h-[55px] lg:text-[25px] font-normal w-auto"} linkto={"/book_appointment"}>Book Appointment Slot</Button>
            </div>
            <div>
              <div>
                <div className="flex gap-2 justify-center items-center">
                  <img src="./assets/Location.png" alt="location" className="lg:mb-10 md:mb-10" />
                  <div className="flex flex-col items-center justify-center">
                    <h2 className="lg:text-[25px] md:text-[22px] text-[17px] font-normal">Check Availability</h2>
                    <p className="text-[25px] font-normal text-[#1E1E1E80] lg:flex md:flex hidden">Today Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start lg:gap-14 gap-6 lg:text-[25px] md:text-[24px] text-[13px] md:mx-5 sm:mx-5 w-auto font-normal pt-14 cursor-pointer border-b-2 border-darkGreen mx-5">
            <Link to={"/info"} className="para_normal font-medium">Info</Link>
            <Link to={"/reviews"} className="para_normal font-medium">Reviews</Link>
            <Link to={"/get_help"} className="para_normal font-medium">Get Help</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RatingAndRReview;
