
const TotalCharges = () => {
    return (
        <div className='max-w-[690px] w-auto lg:ml-0 lg:mr-0 lg:mt-10 ml-8 mr-8 rounded-xl overflow-hidden shadow-md flex flex-col gap-4 border-[1px] border-darkGreen'>
            <div className="bg-darkGreen text-white pl-8 pt-3 pb-3 ">Total Charges</div>
            <div className="pl-8 pt-3 pb-3 pr-6">
                <div className="flex justify-between border-b-[1px] border-[#000] pb-4 lg:text-[20px] font-normal">
                    <p>Total Charges</p>
                    <p>Rs. 200.00</p>
                </div>
            </div>
            <div className="pl-8 pb-3 pr-6">
                <div className="flex justify-between pb-3 lg:text-[20px] font-normal">
                    <p>Total Charges</p>
                    <p>Rs. 200.00</p>
                </div>
            </div>
        </div>
    )
}

export default TotalCharges
