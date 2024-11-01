"use client";
import { useEffect, useState } from "react";
import { sponsorsList } from "@/utils/data";
import Image from "next/image";
import "react-toastify/dist/ReactToastify.css";
import Slider from "react-slick";
import Link from "next/link";

import Reels1 from "../../../public/reels1.png";

export const ReelsVideos = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 600) {
      setIsMobile(!isMobile);
    }
  }, []);
  const SponsorSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    rows: isMobile ? 2 : 1,
    slidesToShow: isMobile ? 3 : 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div
        id="sponsors"
        className="SponsorsWrapper w-full flex justify-center flex flex-col sm:mt-[283px] lg:mt-[370px] m-auto "
      >
        <p className="sm:text-4xl lg:text-6xl text-center font-bold ">
          Вивчайте мови ефективно
        </p>
        <div className=" bg-reelsSection mt-5 sm:flex lg:block  lg:ml-0">
          <div className="SponsorsCards m-auto flex sm:flex-col lg:flex-row flex-wrap justify-between sm:max-w-full lg:max-w-[1100px] ">
            {/* <Slider className="sm:hidden lg:flex justify-center" {...SponsorSettings}> */}
              {sponsorsList?.map((sponsorCard: any) => {
                return (
                  <>
                    <div className="rounded-[20px]  z-10 p-1 w-full max-w-[300px] sm:mb-8 lg:mb-0 m-auto">
                      <div className="rounded-[20px] flex flex-col justify-center max-w-[300px] relative">
                        <div className="p-3">
                          <div className="rellsOverlay">
                            <Image className="" src={Reels1} alt=""></Image>
                          </div>
                          <Link
                            className={"absolute top-0 left-[10p%] p-[82px]"}
                            href={
                              "https://www.instagram.com/aniri_yar/reel/DA-wZzasT45/"
                            }
                          ></Link>
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
    </>
  );
};
