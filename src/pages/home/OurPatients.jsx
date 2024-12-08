import Heading from "../../components/Heading"
import Cards from "../../components/Cards"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const OurPatients = () => {
  return (
    <div className="relative z-10 h-[13rem] lg:h-auto">
      <div className="bg-white lg:mx-auto px-5 lg:mt-20 mt-4 max-w-full lg:w-[84%] lg:h-72 w-full h-4">
        <div className="pb-10 md:pb-6 lg:mb-4"><Heading >What Our Patients Say</Heading></div>
        <Swiper
          breakpoints={{
            1024: {
              width: 1024,
              slidesPerView: 2,
              spaceBetween: 75,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              spaceBetween: 50,
            },
            640: {
              width: 640,
              slidesPerView: 2,
              spaceBetween: 30,
            },
            300: {
              width: 300,
              slidesPerView: 1,
              spaceBetween: 20,
            }
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <div className="relative">
            <SwiperSlide>
              <Cards ImgUrl={"./assets/Ellipse 5.png"} UserName={"Sarah R"} content={"ApnaClinic made my healthcare journey so much easier. The online booking was simple, and the care I received was exceptional."} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards ImgUrl={"./assets/Ellipse 5.png"} UserName={"Sarah R"} content={"ApnaClinic made my healthcare journey so much easier. The online booking was simple, and the care I received was exceptional."} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards ImgUrl={"./assets/Ellipse 5.png"} UserName={"Sarah R"} content={"ApnaClinic made my healthcare journey so much easier. The online booking was simple, and the care I received was exceptional."} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards ImgUrl={"./assets/Ellipse 5.png"} UserName={"Sarah R"} content={"ApnaClinic made my healthcare journey so much easier. The online booking was simple, and the care I received was exceptional."} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards ImgUrl={"./assets/Ellipse 5.png"} UserName={"Sarah R"} content={"ApnaClinic made my healthcare journey so much easier. The online booking was simple, and the care I received was exceptional."} />
            </SwiperSlide>
            <SwiperSlide>
              <Cards ImgUrl={"./assets/Ellipse 5.png"} UserName={"Sarah R"} content={"ApnaClinic made my healthcare journey so much easier. The online booking was simple, and the care I received was exceptional."} />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default OurPatients
