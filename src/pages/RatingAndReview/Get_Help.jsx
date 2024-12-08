import RatingAndRReview from "../../components/RatingAndReview/RatingAndRReview";
import FindResult from "../../components/RatingAndReview/FindResult";
import GetHelpCard from "../../components/RatingAndReview/GetHelpCard";

const Get_Help = () => {
    return (
        <div className="w-full mb-14 lg:mb-60">
            <FindResult />

            <div className="bg-white mx-auto my-7 pb-7 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:w-[1056px]">
                <RatingAndRReview />

                <div className="mx-auto max-w-[978px] w-auto">
                    <p className="text-[22px] font-normal hidden lg:flex">Book Clinic Appointment with Dr Ruhani Singh</p>
                    <GetHelpCard />
                    <GetHelpCard />
                    <GetHelpCard />
                </div>
            </div>
        </div>
    )
}

export default Get_Help
