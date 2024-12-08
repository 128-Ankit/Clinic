import DoctorInfoCard from "../../components/RatingAndReview/DoctorInfoCard";
import AppointmentDayAndDate from "../../components/DrAppointment/AppointmentDayAndDate";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import TimeSlot from "../../components/DrAppointment/TimeSlot";
import Button from "../../components/Button";

import { useRef } from 'react';

const AppointmentSlot = () => {

    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };
    return (
        <div className="bg-white">
            <div className="lg:w-[1067px] h-auto pb-20 rounded-lg mx-auto relative xs:top-7 top-0 bottom-10 bg-white md:mb-4">
                <h1 className="lg:text-[30px] md:text-[28px] text-[20px] font-normal text-center pt-4 md:pt-0 md:pb-3">Appointment Slot</h1>
             
                <div className="flex items-center justify-between py-6 mx-4">
                    <FaChevronLeft
                        onClick={scrollLeft}
                        className="cursor-pointer w-[35px] h-[35px] text-[#8B8B8B]"
                    />
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-scroll scrollbar-hide space-x-4 mx-4 lg:gap-6 md:gap-5 gap-3"
                    >
                        <AppointmentDayAndDate day={"Mon"} date={"5"} />
                        <AppointmentDayAndDate day={"Tue"} date={"6"} />
                        <AppointmentDayAndDate day={"Web"} date={"7"} />
                        <AppointmentDayAndDate day={"Thu"} date={"9"} />
                        <AppointmentDayAndDate day={"Fri"} date={"10"} />
                        <AppointmentDayAndDate day={"Sat"} date={"11"} dayColor={"text-red-500"} dateColor={"text-black"} />
                        <AppointmentDayAndDate day={"Sun"} date={"12"} dayColor={"text-red-500"} dateColor={"text-black"} />
                        <AppointmentDayAndDate day={"Mon"} date={"5"} />
                        <AppointmentDayAndDate day={"Tue"} date={"6"} />
                    </div>
                    <FaChevronRight
                        onClick={scrollRight}
                        className="cursor-pointer w-[35px] h-[35px] text-[#8B8B8B]"
                    />
                </div>

                <div>
                    <TimeSlot slot={"Morning Slot"} bgColor={1} />
                    <TimeSlot slot={"Afternoon Slot"} bgColor={0} />
                    <TimeSlot slot={"Evening Slot"} bgColor={0} />
                </div>

                <Button active={1} linkto={"/checkout"} myClass={"w-auto mx-auto"}>Continue</Button>
                <div className="h-8"></div>
                <div className="flex justify-center">
                    <DoctorInfoCard />
                </div>
            </div>
        </div>
    )
}

export default AppointmentSlot
