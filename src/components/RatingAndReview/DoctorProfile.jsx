
const DoctorProfile = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 max-w-[1056px] w-full mx-auto">
            <h1 className="para_normal pt-4 font-medium">Doctor Profile</h1>
            <div>
                <h1 className="para_normal font-normal text-darkGreen">Biography</h1>
                <p className="para_normal font-normal max-w-[957px] w-full px-2 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>

            <div>
                <h1 className="para_normal font-normal  text-darkGreen">Specialist</h1>
                <ul className="para_normal font-normal list-disc pl-10">
                    <li>Dermatologist</li>
                    <li>Dermatologist</li>
                    <li>Hair Solution </li>
                </ul>
            </div>

            <div>
                <h1 className="para_normal font-normal text-darkGreen">Education</h1>
                <p className="para_normal font-normal">AIIMS Delhi MBBS, MD (DVL) 2001-2006</p>
            </div>
        </div>
    )
}

export default DoctorProfile
