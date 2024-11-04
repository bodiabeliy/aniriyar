"use client";
import { useState } from "react";
import Logo from "../../public/ANIRIYAR.svg";
import Link from "next/link";

export const NavigationManu = () => {

  const [opened, setOpened] = useState(false);
  
  return (
    <div className="lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
       <div className="flex justify-between lg:max-w-[1050px] w-full sm:pt-0 lg:pt-12 items-center	lg:ml-[21px]">
      <img className="sm:scale-75 lg:scale-100 sm:mt-[15px] lg:none" src={Logo.src} alt="" />
      <div className="navbarDesktop sm:hidden md:block">
        <ul className="pt-3 text-lg lg:mr-[-50px] tracking-navigateLink">
          <Link className="ml-10 hover:text-mainOrange" href={"/"}>
            Про мене
          </Link>
          <Link className="ml-10 hover:text-mainOrange" href={"#about"}>
            Відгуки студентів
          </Link>
          <Link className="ml-10 hover:text-mainOrange" href={"#topics"}>
            Уроки
          </Link>
          <Link className="ml-10 hover:text-mainOrange" href={"#speakers"}>
            Тарифи
          </Link>
          
        </ul>
      </div>
      
      <div className="navbarMobile sm:block md:hidden w-full">
        <ul className={`tracking-navigateLink ${opened ? "block":"hidden" } sm:absolute md:relative sm:left-0 sm:top-0 sm:pt-10 sm:pb-10 sm:h-screen flex flex-col w-full bg-tutorBanner z-10`}>
          <Link className="ml-10 pt-4 hover:text-mainOrange" href={"/"}>
          Про мене
          </Link>
          <Link className="ml-10 pt-4 hover:text-mainOrange" href={"#about"}>
          Відгуки студентів
          </Link>
          <Link className="ml-10 pt-4 hover:text-mainOrange" href={"#topics"}>
          Уроки
          </Link>
          <Link className="ml-10 pt-4 hover:text-mainOrange" href={"#speakers"}>
          Тарифи
          </Link>
          
        </ul>
       
      </div>
      <div className={`sm:block md:hidden mr-4 mt-4 absolute right-0 top-0 tham tham-e-squeeze tham-w-6 pt-3 ${opened&& "tham-active"} z-50 `} onClick={() =>setOpened(!opened) }>
        <div className="tham-box">
          <div className="tham-inner"></div>
        </div>
      </div>
    </div>
    </div>
   
  );
};
