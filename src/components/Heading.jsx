
const Heading = ({ children, isCenter, myStyle }) => {
  return (
    <div>
      <h1 className={`${myStyle ? (myStyle) : ("text-[25px] lg:text-[40px] text-darkGreen font-normal md:text-[36px]")}${isCenter ? ("text-center") : ""}`}>{children}</h1>
    </div>
  )
}

export default Heading
