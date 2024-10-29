"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { speakersList, sponsorsList } from "@/utils/data";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
  };
  const SponsorSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: 2,
    slidesToShow: isMobile ? 4 : 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="SpeakersAndSponsorsWrapper h-[1450px] sm:mt-60 lg:mt-20 bg-speakersAndSponsors ">
        <div id="speakers" className="SpeakersWrapper w-full flex justify-center flex flex-col m-auto">
          <p className="sm:text-4xl lg:text-6xl text-center font-bold ">
            Speakers:
          </p>
          <div className=" mt-5 sm:flex lg:block lg:ml-0">
            <div className="SpeakersCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px]">
              <Slider className="flex justify-center" {...SpeakerSettings}>
                {speakersList?.map((speakerCard: any) => {
                  return (
                    <>
                      <div className="cardsBtns-animate rounded-[20px] bg-actionBtns z-10 p-1 w-full max-w-[300px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px] bg-white flex flex-col justify-center max-w-[300px]">
                          <div className="p-3 flex flex-col justify-center">
                            <img
                              className="m-3 w-full"
                              src={speakerCard?.avatar}
                              alt={speakerCard?.name}
                            />
                            <p className="text-center sm:text-xl lg:text-3xl">
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
            </div>
          </div>
        </div>
        <div id="sponsors" className="SponsorsWrapper w-full flex justify-center flex flex-col sm:mt-5 lg:mt-[90px] m-auto">
          <p className="sm:text-4xl lg:text-6xl text-center font-bold ">
            Sponsors:
          </p>
          <div className="mt-5 sm:flex lg:block  lg:ml-0">
            <div className="SponsorsCards m-auto flex sm:flex-col  justify-between sm:max-w-full lg:max-w-[1100px] ">
              <Slider className="flex justify-center" {...SponsorSettings}>
                {sponsorsList?.map((sponsorCard: any) => {
                  return (
                    <>
                      <div className="rounded-[20px]  z-10 p-1 w-full max-w-[300px] sm:mb-8 lg:mb-0 m-auto">
                        <div className="rounded-[20px] flex flex-col justify-center max-w-[300px] relative">
                          <div className="p-3">
                            <img
                              className="m-3 w-full"
                              src={sponsorCard?.sponsor}
                              alt={sponsorCard?.name}
                            />
                            <Link className={"absolute top-0 left-[10p%] p-[82px]"} href={sponsorCard?.link}></Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakersAndSponsors;
