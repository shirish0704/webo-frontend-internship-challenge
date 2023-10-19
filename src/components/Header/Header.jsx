import NavigationBar from "../Navbar/NavigationBar";
import "./Header.css";
import { AiFillPlayCircle } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="header">
        <NavigationBar />
        <div className="hero ">
          <div className="hero__left">
            <h1 className="hero__left--heading">
              Managing freelance payments has never been easier
            </h1>
            <p className="hero__left--para">
              Yet bed any for travelling assistance indulgence unpleasing. Not
              thoughts all exercise blessing.
            </p>
            <div className="hero__left--btn flex gap-[50px] max-[1280px]:gap-7">
              <button className="bg-[#3734A9] text-white text-[16px] leading-[25px] py-[15px] px-[38px] rounded-[47px] max-[1280px]:w-fit">
                Get Started
              </button>
              <div className="hero__left--btn__right">
                <div className="btn__right--icon flex items-center gap-[11px] max-[1280px]:gap-[8px]">
                  <AiFillPlayCircle className="fill-[#22D497] h-[60px] w-[60px] max-[1280px]:h-[54px] max-[1280px]:w-[54px]" />
                  <h3 className="text-[17px] text-[#3734A9] font-[500] leading-[30px] tracking-[-0.34px]">
                    See How It Works
                  </h3>
                </div>
              </div>
            </div>
            <div className="hero__left--bottom flex gap-[24px]">
              <div className="bottom__left items-center flex gap-[6px] ">
                <BsFillCheckCircleFill className="fill-[#3734A9]" />
                <h3 className="text-[#757095] text-[14px]">Free Register</h3>
              </div>
              <div className="bottom__left items-center flex gap-[6px]">
                <BsFillCheckCircleFill className="fill-[#3734A9]" />
                <h3 className="text-[#757095] text-[14px]">Great Service</h3>
              </div>
            </div>
          </div>
          <div className="hero__right">
            <img
              src="/images/hero-img.svg"
              alt="hero-img"
              className="hero__right--img"
            />
          </div>
        </div>
        <div className="hero__design--one">
          <img src="/images/1.png" alt="one" />
        </div>
        <div className="hero__design--two">
          <img src="/images/2.png" alt="two" />
        </div>
        <div className="hero__design--three">
          <img src="/images/3.png" alt="three" />
        </div>
      </div>
    </>
  );
};

export default Header;
