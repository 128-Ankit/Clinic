import FindResult from "../../components/RatingAndReview/FindResult";
import RatingAndRReview from "../../components/RatingAndReview/RatingAndRReview"
import ReviewsCards from "../../components/RatingAndReview/ReviewsCards";
import ReviewCountStarts from "../../components/RatingAndReview/ReviewCountStarts";


const Reviews = () => {

  return (
    <div className="w-full">
      {/* <FindResult /> */}
      <div className="xl:w-[1056px] bg-white mx-auto my-7 pb-7 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <RatingAndRReview />
        <div className="lg:w-[978px] mx-auto">
          <div className="lg:w-[917px] lg:h-auto flex lg:flex-row flex-col lg:mx-auto pb-8 mx-5">
            <div className="lg:w-[45%] w-auto flex flex-col gap-3">
              <h1 className="text-[30px] font-medium pl-1">Patient Review</h1>
              <div>
                <img src="./assets/Group 29.png" alt="" className="w-[197px] lg:w-auto" />
              </div>
              <div className="flex flex-col gap-4">
                <ReviewCountStarts starCount={"5"} percentage={100} />
                <ReviewCountStarts starCount={"4"} percentage={90} />
                <ReviewCountStarts starCount={"3"} percentage={70} />
                <ReviewCountStarts starCount={"2"} percentage={0} />
                <ReviewCountStarts starCount={"1"} percentage={0} />
              </div>
            </div>
            <div className="lg:w-[65%] w-auto lg:border-l-[1px] lg:border-[#000000] pt-5 lg:pt-0 pb-5">
              <ReviewsCards />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
