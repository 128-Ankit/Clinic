

const ReviewCountStarts = ({ starCount, percentage }) => {
    return (
        <div className="flex gap-3 items-center text-[16px] font-medium">
            <p className="w-[80px]" >{starCount} Star</p>
            <div className="w-full h-[32px] border-[1px] border-darkGreen rounded-md">
                <p className={`${percentage === 0 ? ("bg-transparent"): (`bg-darkGreen w-[${percentage}%]`)}  h-full rounded-sm`}></p>
            </div>
            <p className="w-[100px]" >{percentage}%</p>
        </div>
    )
}

export default ReviewCountStarts
