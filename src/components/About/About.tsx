import Image from "next/image"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IconArrowCard } from "../icons/Arrow";
import CircleUI from "@/../public/Ellipse 1.png"


import { discussionList } from "@/./utils/data";

const About = () => {
  return (
    <>
      <div className="aboutWrapper relative bg-aboutSection bg-bottom flex justify-end mb-20 h-70% sm:m-h-[550px] lg:m-h-full">
      <Image className="absolute sm:left-[-30%] lg:left-[-38px] sm:top-[-33px] sm:scale-50 lg:top-[-50px] sm:scale-50 lg:scale-75" src={CircleUI} alt={""} />
        <div id="about" className="w-[1000px] sm:mr-0 lg:mr-[60px] sm:mt-10 lg:mt-32 z-50">
          <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Чому репетиторство?</p>
          <div className=" sm:mb-80 lg:mb-0 sm:p-5">
            <p className="aboutSectionDescriptoion sm:text-[20px] lg:text-[28px] lg:leading-[40px] sm:h-[440px] sm:overflow-y-scroll lg:overflow-y-auto">
                Мені подобається, коли ти докладаєш зусилля і можеш отримати 
                бажаний результат.  Саме репетиторство надає мені безліч переваг і 
               відкриває шлях до саморозвитку. А коли ти ще бачиш  теплі відгуки, то це  лише стимулює мене до постійного удосконалення і роботи над структурою занять.
            </p>
          </div>
          {/* <div id="topics" className="topicsListExpandedWrapper max-w-[800px]">
            <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Discussion topics:</p>
            <div className=" sm:mb-80 lg:mb-0 sm:p-5">
            <p className="aboutSectionDescriptoion text-xl sm:h-[440px] sm:overflow-y-scroll lg:overflow-y-auto">
              CryptoGOAT is the blockchain conference network bringing together
              the key players of crypto <br /> industry and experts to redefine
              the future of finance. The edition of the CryptoGOAT will take{" "}
              <br /> place during on Jule 13, 2024 in Dubai, with the world`s
              top crypto companies and blockchain <br />
              entrepreneurs.Today, UAE, specifically Dubai is gearing up to
              become a global crypto hub. <br /> Thus, CryptoGOAT will be the
              gathering in the region on behalf of the world of blockchain and{" "}
              <br /> cryptocurrency with a wide range of topics focused on the
              financial technologies of the future, <br /> extensive networking
              opportunities and participation from more than 40 countries.
            </p>
          </div> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default About;
