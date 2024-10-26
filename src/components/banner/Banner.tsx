"use client"

import { ActionButton } from "../buttons/ActionButton";
import FigureMobile from "@/../public/figure1.png"

const Banner = () => {
    const MoveTo = () => {        
        window.location.href="#form"
    }
  return (
    <>
        <div className="bannerContent lg:max-w-[70%] sm:mt-10 lg:mt-20 sm:ml-4 lg:ml-[45px] scale-105 extra-loose sm:w-[350px] lg:w-full">
            <div className="bannerTitle sm:pl-[5px] lg:pl-0">
                <p className="sm:text-5xl lg:text-7xl font-semibold  tracking-tight font-pixel">Crypto
                    <span className="text-gradient ">
                        GOAT
                    </span>
                </p>
            </div>
            <div className="bannerContent sm:text-xl lg:text-4xl font-medium sm:mt-4 lg:mt-9 sm:pl-[5px] lg:pl-0">
            Blockchain conference bringing <br /> together the key players of crypto <br /> industry and experts to redefine <br /> the future of finance
            </div>
            <div className="actionBtnWrapper sm:mt-[85%] lg:mt-20 flex sm:justify-center lg:justify-start">
            <ActionButton disabled={false} onClick={() =>{MoveTo()}} className={"actionBtn font-pixel rounded-full lg:font-semibold sm:text-2xl lg:text-3xl p-5 sm:w-[90%] lg:w-[270px] bg-actionBtns hover:bg-[#e3e3e3]"} text={"Register now"} />
            </div>
        </div>
        <img className="sm:block lg:hidden absolute m-auto w-[87%] top-[230px] opacity-90 scale-125" src={FigureMobile.src} alt="" />
    </>
  );
};

export default Banner;
