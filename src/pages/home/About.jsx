



import Button from "../../components/Button";

function About() {

  return (
    <div className="">
      <div className="bg-[#E3F0FF] py-10 flex items-center sm:py-4 max-w-[1512px] h-full lg:min-h-[380px] lg:px-0 xl:min-h-[451px] xl:px-0 relative">
        <div className=" p-2 flex flex-col-reverse items-center w-full gap-12 sm:gap-5 sm:flex-row md:flex-row md:min-h-[260px] md:space-y-0 md:space-x-6 md:gap-0 md:pl-6 md:mx-5 md:ml-3 xl:ml-20 xl:flex-row xl:space-y-0 xl:space-x-6 xl:gap-3 xl:pl-6 relative">
          <div className="relative">
            <img
              src="./assets/about.png"
              alt="doctor"
              className="rounded-md object-cover max-w-[252px] max-h-[300px] sm:h-[200px] sm:ml-9 md:h-[250px] xl:w-[252px] xl:h-[300px]"
            />
            <div className="absolute top-[-50px] left-[-50px]  sm:top-[-20px] sm:left-[0px]  md:top-[-40px] md:left-[0px]  xl:top-[-100px] xl:left-[-50px]">
              <img
                src="./assets/Ellipse 9.png"
                alt="circle"
                className="w-[112px] h-[112px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] xl:w-[183px] xl:h-[174px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-10 justify-center items-start max-w-[852px]  w-auto sm:gap-5 md:gap-7 lg:text-left xl:text-left max-sm:p-4">
            <p className="para_normal">
              Welcome to <strong className="strong_text">ApnaClinic</strong>,
              where your health comes first. We understand that finding quality
              healthcare can be challenging, which is why we've created a
              platform that makes accessing top-tier medical services easier
              than ever. Whether you need a routine check-up, a specialist
              consultation, or a second opinion,{" "}
              <strong className="strong_text">ApnaClinic </strong>
              is here to help you every step of the way.
            </p>
            <div className="hidden sm:flex md:flex xl:flex xl:justify-start xl:w-full">
              <Button linkto={"/about"} active={true}>
                About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex xl:flex absolute right-0 bottom-0 lg:h-[449px] xl:h-[533px]">
          <img src="/assets/Group 14.png" alt="Plus Icons bg" className="" />
        </div>
        <div className="hidden lg:flex xl:flex absolute right-0 bottom-0 lg:h-[449px] xl:h-[533px]">
          <img src="/assets/Group 14.png" alt="Plus Icons bg" className="" />
        </div>
      </div>
    </div>
  );
}

export default About;