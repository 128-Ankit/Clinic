import DoctorDetails from "../../components/CheckOut/DoctorDetails";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import { MdVerified } from "react-icons/md";

const AppointmentConfirmation = () => {
    return (
        <div className='lg:my-16 md:my-12 my-8'>
            <div className='lg:bg-white h-auto max-w-[1067px] w-auto mx-auto lg:rounded-2xl lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:bg-white md:h-auto  md:rounded-2xl md:shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div>
                    <h1 className='text-[25px] md:text-[35px] font-normal py-3 lg:px-16 lg:flex md:flex hidden md:px-7'>CheckOut</h1>
                    <div className='flex flex-col-reverse items-center md:flex-row lg:flex-row sm:flex-row md:pl-7 gap-8 xs:gap-4'>
                        <div className='w-auto lg:flex lg:justify-center'>
                            <DoctorDetails />
                        </div>

                        <div className='flex justify-center items-center flex-col gap-10 w-auto md:mx-auto'>
                            <div className="p-2 rounded-full bg-darkGreen flex items-center justify-center">
                                <MdVerified className="text-white  text-[80px]"/>
                                {/* <img src="./assets/Approval.png" alt="Approval" className="max-w-[100px] max-h-[100px] w-auto h-auto"/> */}
                            </div>
                            <Heading isCenter={1} myStyle={"text-[24px] lg:text-[40px] text-center font-normal md:text-[36px]"}>
                                Appointment Booked Successfully
                            </Heading>
                            <Button active={1} linkto={"/"} myClass={"w-auto"} textSize={"text-[19px] md:text-[30px] font-normal"}>Go to Home</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppointmentConfirmation
