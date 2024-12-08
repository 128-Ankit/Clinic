import SelectMember from "../../components/CheckOut/SelectMember";
import TotalCharges from "../../components/CheckOut/TotalCharges";
import DoctorDetails from "../../components/CheckOut/DoctorDetails";
import Button from "../../components/Button";


const CheckOut = () => {
    return (
        <div className='lg:my-16 md:my-12 my-8'>
            <div className='lg:bg-white lg:h-auto max-w-[1067px] lg:rounded-2xl lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:bg-white md:mx-auto md:rounded-2xl md:shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-auto h-auto'>
                <div>
                    <h1 className='lg:px-16 lg:flex md:text-[25px] md:flex md:px-7 text-[25px] font-normal py-3 hidden'>CheckOut</h1>
                    <div className='flex sm:flex-row flex-col justify-center items-center lg:gap-10 gap-0'>
                        <div className='w-auto lg:flex lg:justify-center md:ml-5'>
                            <DoctorDetails />
                        </div>

                        <div className='w-auto '>
                            <SelectMember />
                            <TotalCharges />
                            <p className="max-w-[627px] w-auto text-center text-red-600 mx-auto px-2 lg:px-0 mt-5 font-normal">
                                By booking Appointment, you are agreeing to Terms and Conditions of the usage of 24x7,Privacy Policy, Refund Policy.
                            </p>
                            <div className="flex items-center justify-center mt-4 md:mb-4 lg:mb-4">
                                <Button linkto={"/AppointmentConfirmation"} myClass={"w-auto font-normal rounded-2xl my-7 bg-darkGreen text-white lg:text-[25px] md:text-[22px] text-[12px]"}>
                                    Book Appointment
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOut
