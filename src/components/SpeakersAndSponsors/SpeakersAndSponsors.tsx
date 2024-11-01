"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { speakersList, sponsorsList } from "@/utils/data";
import Satisfaction from "../../../public/satisfaction 1.svg"
import Reels1 from "../../../public/reels1.png"
import Circle2 from "../../../public/Ellipse 4.png"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { BouncedLeftArrow } from "../icons/DoubleArrowLeft";
import { BouncedRightArrow } from "../icons/DoubleArrowRight";

const SpeakersAndSponsors = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);

  const SpeakerSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 2 : 1,
    slidesToScroll: 1,
  };
  const SponsorSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: isMobile?2:1,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="SpeakersAndSponsorsWrapper relative sm:h-[1450px] lg:h-full sm:mt-[-80px] bg-feedbackSection sm:overflow-x-hidden	lg:overflow-scroll">
      <Image className="absolute sm:top-[37%] lg:top-[35%] sm:right-[55%] lg:right-[-10%] sm:scale-75 lg:scale-100 z-50" src={Circle2} alt={""} />

        <div id="speakers" className="SpeakersWrapper w-full flex justify-center flex flex-col m-auto">
          <Image className="absolute sm:left-[40%] lg:left-[37%] sm:top-[13%] mediumPhoneSize:top-[11.5%] lg:top-[10%] z-10 scale-75" src={Satisfaction} alt={""} />
          <p className="sm:text-4xl lg:text-6xl text-center text-white font-bold sm:mt-10 lg:mt-[100px] sm:mb-5 lg:mt-[100px]">
          Відгуки студентів:
          </p>
          <div className=" mt-5 sm:flex lg:block sm:ml-[15px] lg:ml-0 sm:mr-[15px] lg:mr-0">
            <div className="SpeakersCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px]">
              <Slider className="flex justify-center" {...SpeakerSettings}>
                {speakersList?.map((speakerCard: any) => {
                  return (
                    <>
                      <div className="cardsBtns-animate rounded-[20px] bg-actionBtns z-10 p-1 w-full max-w-[400px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px] bg-white flex flex-col justify-center max-w-[400x]">
                          <div className="p-3 flex flex-col justify-center">
                            <p className="text-center sm:text-xl font-bold lg:text-3xl">
                              {speakerCard?.name}
                            </p>
                            <p className="text-center">
                              {speakerCard?.position}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
              <div className="animatedSliderButtons sm:flex lg:hidden text-white justify-center animate-shake">
                <BouncedLeftArrow className="mt-[11%] mr-[6%]" fill="white"/>
                 <span className=" text-2xl mt-[3.5%] text-center animate-shake animate-infinite animate-duration-[2000ms] animate-delay-0 animate-ease-linear animate-normal animate-fill-both"> Свайп <br /> вліво або вправо</span>
                <BouncedRightArrow className="items-center	mt-[11%] ml-[6%]" fill="white" />
              </div>

            </div>
          </div>
        </div>
        <div id="sponsors" className="SponsorsWrapper relative bg-reelsSection w-full flex justify-center flex flex-col sm:mt-[360px] lg:mt-[440px] m-auto">
          <p className="sm:text-4xl lg:text-6xl text-center font-bold z-50">
          Вивчайте мови ефективно
          </p>
          <div className="sm:max-h-[500px] lg:max-h-full sm:overflow-y-scroll lg:overflow-y-auto mt-5 sm:flex lg:block  lg:ml-0">
            <div className="flex sm:flex-col lg:flex-row sm:flex-nowrap lg:flex-wrap SponsorsCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px] ">
              {/* <Slider className="flex justify-center" {...SponsorSettings}> */}
                {sponsorsList?.map((sponsorCard: any) => {
                  return (
                    <>
                      <div className="rounded-[20px]  z-10 p-1 w-full max-w-[300px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[300px] relative">
                          <div className="p-3">
                            <div className="rellsOverlay">
                            <Image className="" src={Reels1} alt=""></Image>
                            </div>
                            <Link className={"absolute top-0 left-[10p%] p-[82px]"} href={"https://www.instagram.com/aniri_yar/reel/DA-wZzasT45/"}></Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              {/* </Slider> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersAndSponsors;
