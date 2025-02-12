"use client";
import Image from "next/image";
import { DropDownButton } from "../buttons/DropDownButton";
import FigureMobile from "@/../public/figure1.png";
import Flags from "@/../public/🇬🇧🇫🇷.png";
import londonBanner from "@/../public/londonBanner-2.png";
import { useCallback, useEffect, useState } from "react";
import Modal from "../Modal/Modal";

import EngFrFlags from "../../../public/engfr.png";
import { ActionButton } from "../buttons/ActionButton";

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);


  const OpenDropDown = useCallback(() => {
    setIsDropDownOpen(!isDropDownOpen);
  }, [isDropDownOpen]);

  return (
    <>
      {/* <Modal isModalOpen={isModalOpen} setModalOpen={setIsModalOpen} /> */}
      <div className="bannerContent sm:ml-5 lg:ml-0 sm:mt-10 lg:mt-5 sm:ml-4 lg:ml-[45px] extra-loose sm:w-[335px] lg:w-full z-10">
        <div className="bannerContent sm:text-xl lg:text-4xl sm:mb-4 lg:mb-9 sm:pl-[5px] lg:pl-0"></div>
        <div className="bannerTitle sm:pl-[5px] lg:pl-0">
          <p className="sm:text-center lg:text-left sm:text-2xl lg:text-5xl sm:font-grotesk lg:font-monterchi uppercase z-[9999]">
            Aniri - твій гід у світі  <br/> англійської та французької!
          </p>
          <Image
            className="absolute  sm:right-10 sm:top-[18%] lg:right-[35%] lg:top-[-6%] sm:scale-0 lg:scale-50"
            width={400}
            src={EngFrFlags}
            alt={""}
          />
        </div>
        <div className="bannerContent font-lora font-bold lg:relative sm:text-xl lg:text-3xl sm:mt-4 lg:mt-9 sm:pl-[5px] lg:pl-0 ">
          <p className="text-mainOrange">
            Зроби мови своїм найкращим інструментом!
          </p>
        </div>
        <div className="actionBtnWrapper lg:w-[40%] sm:mt-[83%] sm:pb-[75px] lg:pb-0 lg:mt-20 sm:mb-0 sm:mb-0 lg:mb-10 flex sm:flex-col lg:flex-row sm:justify-center lg:justify-between">
        <ActionButton
            disabled={false}
            className={
              " relative actionBtn sm:p-auto lg:p-0 sm:mb-4 lg:mb-0  font-grotesk rounded-[25px] border-mainOrange border-2 lg:font-semibold  sm:text-2xl lg:text-2xl p-5 sm:w-[90%] lg:w-[250px] sm:h-auto lg:h-[80px] bg-white hover:bg-darkOrange text-mainOrange hover:text-white"
            }
            text={"Залишити заявку"}
          />
          <DropDownButton
            disabled={false}
            onClick={() => {
              OpenDropDown();
            }}
            isDropDownOpen={isDropDownOpen}
            className={
              " relative actionBtn font-grotesk rounded-[25px] border-white border-2 lg:font-semibold  sm:text-2xl lg:text-2xl p-5 sm:w-[90%] lg:w-[250px] sm:h-auto lg:h-[80px] bg-mainOrange hover:bg-darkOrange  focus:bg-darkOrange text-white focus:shadow-[0px_6px_1px_0px_darkOrange]"
            }
            text={"Обрати мову"}
          />
        </div>
      </div>
      <div className="sm:hidden lg:block tutorImage lg:absolute lg:right-[-7%] lg:top-[3%] sm:scale-50 lg:scale-[60%]">
        <Image src={londonBanner} alt={"Tutor Iryna Yarychewska"} />
      </div>
      <Image
        className=" mobileTutorImage sm:block lg:hidden absolute sm:flex lg:block justify-center sm:w-full lg:w-auto sm:right-[0%] lg:top-[0%] lg:right-[0%] m-auto w-[90%] top-[230px] opacity-90 scale-100"
        src={londonBanner}
        alt=""
      />
    </>
  );
};

export default Banner;
