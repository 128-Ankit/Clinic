import { Link } from "react-router-dom";

const Button = ({ children, linkto, active, textSize, myClass }) => {
    // console.log(myClass);
    return (
        <div className="flex justify-center items-center text-center">
            <Link to={linkto} className="w-full flex">
                <div className={`${myClass ? myClass : ""} ${textSize ? textSize : "text-[14px] sm:text-[28px] md:text-[20px] lg:text-[25px]"} font-medium px-6 py-2 rounded-xl ${active ? ("bg-darkGreen text-white border-none") : ("text-darkGreen border-2 border-darkGreen")}`}>
                    {children}
                </div>
            </Link>
        </div>
    );

}

export default Button;
