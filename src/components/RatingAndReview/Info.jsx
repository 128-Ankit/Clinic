import Button from "../Button"


const Info = () => {
    return (
        <div className="max-w-[950px] flex xs:flex-row flex-col justify-between p-4 xs:p-3 xs:gap-0 gap-4 items-center">
            <div>
                <h1 className="para_normal font-normal">Daffodils, by Artemis Hospitals</h1>
                <p className="para_normal font-normal">Tagore Town, Prayagraj</p>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="para_normal font-normal xs:text-end text-center">₹ 200</h2>
                <Button active={1} myClass={"xs:w-auto w-[160px] font-normal"} textSize={"para_normal"} linkto={"/book_appointment"}>Book Now</Button>
            </div>
        </div>
    )
    
}

export default Info
