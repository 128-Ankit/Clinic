const Card = ({ myClass, ImgUrl, content, imgClassName }) => {
    return (
        <div>
            <div className={`${myClass}`}>
                <div className="flex flex-col">
                    <img src={ImgUrl} alt="Doctor" className={`${imgClassName ? imgClassName : "h-[81px] w-[81px] lg:h-[160px] lg:w-[160px] md:h-[150px] md:w-[155px]"} rounded-md`} />
                    <p className="para_normal font-normal ml-2 pt-2">{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
