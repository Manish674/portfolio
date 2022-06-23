import type { NextPage } from "next";
import bg from "../public/images/bg.png";
import scroll from "../public/images/scroll.png";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiOutlineGithub } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const Home: NextPage = () => {
  return (
    <>
      <img src={bg.src} className="w-[90%] absolute z-[-1]" />
      {/* <Navbar /> */}
      <div className="relative flex flex-col justify-center w-[100%] h-[100vh]">
        <div className="w-[80%] space-y-4 mx-auto">
          <h1 className="heading uppercase leading-[43px] text-[3rem] font-bold text-[#000C24]">
            Manish
          </h1>
          <h4 className="text-white text-[1.4rem] font-semibold">
            Junior Front-end Web Developer
          </h4>
          <div className="flex items-center space-x-4 text-[2rem] text-[#928A97]">
            <TiSocialLinkedinCircular className="ml-[-0.2rem] text-[2.3rem]" />
            <AiOutlineGithub />
            <IoIosMail className="text-[2.3rem]" />
          </div>
          <div className="absolute bottom-[3rem] mt-auto text-[#928A97] flex">
            <img src={scroll.src} className="mr-2" />
            Scroll
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[100vh] border-2">
      </div>
    </>
  );
};

export default Home;
