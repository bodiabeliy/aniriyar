"use client"
import Image from "next/image"
import { ActionButton } from "../buttons/ActionButton";
import FigureMobile from "@/../public/figure1.png"
import Flags from "@/../public/🇬🇧🇫🇷.png"
import Tutor from "@/../public/Aniri.png"

const Banner = () => {
    const MoveTo = () => {        
        window.location.href="#form"
    }
  return (
    <>
        <div className="bannerContent sm:ml-5 lg:ml-0 lg:max-w-[70%] sm:mt-10 lg:mt-20 sm:ml-4 lg:ml-[45px] scale-105 extra-loose sm:w-[335px] lg:w-full">
        <div className="bannerContent sm:text-xl lg:text-4xl sm:mb-4 lg:mb-9 sm:pl-[5px] lg:pl-0">
        Всім привіт, мене звати
            </div>
            <div className="bannerTitle sm:pl-[5px] lg:pl-0">
                <p className="sm:text-5xl lg:text-7xl font-bold italic tracking-tight  font-inter ">
                   Ірина Яричевська
                </p>
            </div>
            <div className="bannerContent lg:relative sm:text-xl lg:text-4xl sm:mt-4 lg:mt-9 sm:pl-[5px] lg:pl-0 lg:leading-[60px]">
            Твій репетитор з англійської та <br /> французької мов 
                <Image className="absolute sm:right-10 sm:top-[25%] lg:right-[50%] lg:top-[50%] sm:scale-50 lg:scale-100" src={Flags} alt={""}  />
            </div>
            <div className="actionBtnWrapper sm:mt-[100%] sm:pb-[40px] lg:pb-0 lg:mt-20 sm:mb-0 lg:mb-20 flex sm:justify-center lg:justify-start">
                <ActionButton disabled={false} onClick={() =>{MoveTo()}} className={"actionBtn rounded-full border-white border-4 lg:font-semibold italic sm:text-2xl lg:text-3xl p-5 sm:w-[90%] lg:w-[270px] bg-transparent "} text={"Пробний урок"} />
                </div>
            
        </div>
        <div className="sm:hidden lg:block tutorImage lg:absolute lg:right-[1%] lg:top-[21%]">
                    <Image src={Tutor} alt={""} />
                </div>
        <Image className=" mobileTutorImage sm:block lg:hidden absolute  sm:right-[0%] lg:top-[0%] lg:right-[0%] m-auto w-[90%] top-[230px] opacity-90 scale-100" src={Tutor} alt="" />
    </>
  );
};

export default Banner;
