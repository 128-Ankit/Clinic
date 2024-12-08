import React from 'react'

const AppointmentDayAndDate = ({ day, date, dayColor, dateColor }) => {
    return (
        <div>
            <div className={`flex flex-col lg:w-[62px] lg:h-[67px]  md:w-[49px] md:h-[57px] w-[46px] h-[50px]  para_normal font-normal border-[1px] border-[#00000080] rounded-md justify-center items-center`}>
                <p className={`${dayColor ? (dayColor) : ("text-[#00000080]")} `}>{day}</p>
                <p className={` ${dateColor ? (dateColor) : ("text-[#00000080]")} `}>{date}</p>
            </div>
        </div>
    )
}

export default AppointmentDayAndDate
