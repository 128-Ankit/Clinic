
const DoctorInfoCard = () => {
    return (
        <div className="flex flex-col xs5:flex-row justify-between lg:gap-5 md:gap-4 gap-3 xs5:gap-1 max-w-[978px] w-auto mx-4 h-auto rounded-md overflow-hidden bg-[#027D5D1A] border-[1px] border-darkGreen">
            <div className="max-w-[817px] w-full h-full bg-white">
                <div className="relative">
                    <img src="./assets/Rectangle 22.png" alt="doctor img" className="object-cover w-full " />
                    <div>
                        <img src="./assets/Rectangle 164.png" alt="verified" className='absolute top-0 xl:w-[65px] md:w-[60px] sm:w-[50px] w-auto' />
                        <p className='absolute top-[12px] text-white rotate-[-45deg] lg:text-[12px] md:text-[12px] text-[9px]'>Verified</p>
                    </div>
                </div>
                <img src="./assets/Group 29.png" alt="stars" className="w-auto max-w-[200px] h-auto mx-auto" />
            </div>
            <div>
                <div className="p-2">
                    <h1 className="lg:text-[30px] md:text-[20px] sm:text-[18px] xs5:text-[14px] text-[17px] font-normal">Dr. Ruhani Singh</h1>
                    <h2 className="lg:text-[25px] md:text-[17px] sm:text-[14px] xs5:text-[12px] text-[15px] font-normal">MBBS, MD (DVL)</h2>
                    <h2 className="lg:text-[25px] md:text-[17px] sm:text-[14px] xs5:text-[12px] text-[15px] font-normal">Specialist: Dermatologist, Skin Care, Hair</h2>
                    <h1 className="lg:text-[30px] md:text-[20px] sm:text-[17px] xs5:text-[13px] text-[17px] font-normal text-darkGreen">16+ years experience</h1>
                    <p className="lg:text-[19px] md:text-[14px] sm:text-[13px] text-[13px] font-normal">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            <img src="./assets/Share.png" alt="share icon" className="w-[30px] h-[30px] m-2" />

        </div>
    )
}

export default DoctorInfoCard
