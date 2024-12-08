const Card = ({myClass, ImgUrl, content}) => {
    return (
        <div>
            <div className={`${myClass}`}>
                <div className="flex flex-col">
                    <img src={ImgUrl} alt="Doctor" className={"h-[137.23px] w-[230px] lg:h-[179px] lg:w-[300px] md:h-[137px] rounded-md"} />
                    <p className="para_normal font-normal w-auto mx-auto pt-2">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
