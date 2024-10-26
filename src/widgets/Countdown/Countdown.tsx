"use client";

import Countdown from "react-countdown";

const CountdownTimer = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render a complete state
      return <></>;
    } else {
      // Render a countdown
      return (
        <>
          <div className="cardsBtns-animate rounded-[20px] bg-cardsBtns animate z-10 w-full p-1 sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]">
            <div className="rounded-[20px] bg-backgroundColor h-[100%] flex flex-col justify-center">
              <p className="text-center sm:text-xl lg:text-3xl">{days}</p>
              <p className="text-center">days</p>
            </div>
          </div>
          <div className="cardsBtns-animate rounded-[20px] bg-cardsBtns z-10 w-full p-1 sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]">
            <div className="rounded-[20px]  bg-backgroundColor h-[100%] flex flex-col justify-center">
              <p className="text-center sm:text-xl lg:text-3xl">{hours}</p>
              <p className="text-center">hours</p>
            </div>
          </div>
          <div className="cardsBtns-animate rounded-[20px] bg-cardsBtns z-10 w-full p-1 sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]">
              <div className="rounded-[20px]  bg-backgroundColor h-[100%] flex flex-col justify-center">
                <p className="text-center sm:text-xl lg:text-3xl">{minutes}</p>
                <p className="text-center">minutes</p>
              </div>
            </div>

            <div className="cardsBtns-animate rounded-[20px] bg-cardsBtns z-10 w-full p-1 sm:w-[70px] sm:h-[70px] lg:w-[100px] lg:h-[100px]">
              <div className="rounded-[20px] bg-backgroundColor h-[100%] flex flex-col justify-center">
                <p className="text-center sm:text-xl lg:text-3xl">{seconds}</p>
                <p className="text-center">seconds</p>
              </div>
            </div>
        </>
      );
    }
  };
  return (
    <>
      <div className="countdownWrapper flex justify-center w-full sm:mt-20 lg:mt-40 mb-10">
        <div className="countdownContent w-[600px] flex flex-col m-auto">
          <p className="sm:text-2xl lg:text-4xl font-semibold text-center">
            Time left:
          </p>
          <div className="countdown mt-2 flex sm:justify-around lg:justify-between">
            <Countdown date={"July 12, 2024 18:30:00"} renderer={renderer} />         
          </div>
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
