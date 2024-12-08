import RatingAndRReview from "../../components/RatingAndReview/RatingAndRReview";
import Info from "../../components/RatingAndReview/Info";
import DoctorProfile from "../../components/RatingAndReview/DoctorProfile";
import FindResult from "../../components/RatingAndReview/FindResult";


const Dr_Info = () => {
    return (
        <div className="w-full">
            <FindResult />
            <div className="max-w-[1056px] w-full bg-white mx-auto my-7 pb-7 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
                <RatingAndRReview />
                <div className="lg:w-[978px] mx-auto lg:pl-8 md:pl-8 pl-3 ms:pl-5">
                    <div>
                        <h1 className="lg:text-[30px] md:text-[26px] text-[20px] font-normal pb-2">Location</h1>
                        <img src="./assets/Rectangle 45.png" alt="map" className="max-w-[950px] w-full lg:h-[342px] md:h-[300px] h-[150px] lg:mr-0 pr-4" />
                        <div className=" border-b-[1px] border-[#1E1E1E40] pb-4 pt-4 md:pt-4 md:pb-7 md:mb-4">
                            <Info />
                            <div className="border-b-[1px] border-[#1E1E1E40] lg:w-[940px] mx-auto "></div>
                            <Info />
                        </div>
                    </div>
                    <DoctorProfile />
                </div>
            </div>
        </div>
    )
}

export default Dr_Info
