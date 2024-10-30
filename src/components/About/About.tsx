import Image from "next/image"
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IconArrowCard } from "../icons/Arrow";
import CircleUI from "@/../public/Ellipse 1.png"
import WithBooks from "@/../public/with books 1.svg"


import { discussionList } from "@/./utils/data";

const About = () => {
  return (
    <>
      <div className="aboutWrapper relative 2screens backgroundSize bg-aboutSection bg-bottom flex justify-end mb-20 h-70% sm:m-h-[550px]">
      <Image className="absolute sm:left-[-30%] lg:left-[-38px] sm:top-[-33px] sm:scale-50 lg:top-[-50px] sm:scale-50 lg:scale-75" src={CircleUI} alt={""} />
        <div id="about" className="w-[1000px] sm:mr-0 lg:mr-[60px] sm:mt-10 lg:mt-32 z-50">
          <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Чому репетиторство?</p>
          <div className=" sm:mb-80 lg:mb-0 sm:p-5">
            <p className="aboutSectionDescriptoion sm:text-[20px] lg:text-[28px] lg:leading-[40px] sm:h-[460px] sm:overflow-y-scroll lg:overflow-y-auto">
                Мені подобається, коли ти докладаєш зусилля і можеш отримати 
                бажаний результат.  Саме репетиторство надає мені безліч переваг і 
               відкриває шлях до саморозвитку. А коли ти ще бачиш  теплі відгуки, то це  лише стимулює мене до постійного удосконалення і роботи над структурою занять.
            </p>
           
          </div>
          {/* 1 variant */}
          <div className="sm:mt-[-450px] lg:mt-0">
          <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold mb-10">Чому обирають мене?</p>
            <Image className="withbooks absolute sm:hidden lg:block sm:left-[-35%] lg:left-[38px] lg:top-[180px] sm:scale-50 lg:top-[-50px] sm:scale-50 lg:scale-100" src={WithBooks} alt={""} />

           {/* <ol className="sm:ml-[35px] lg:ml-0 sm:p-[15px] lg:p-0">
            <li className="sm:text-[20px] lg:text-[28px] lg:leading-[80px] sm:overflow-y-scroll lg:overflow-y-auto">📚 Вже протягом <b>7</b> років займаюся репетиторством іноземних мов</li>
            <li className="sm:text-[20px] lg:text-[28px] lg:leading-[80px]  sm:overflow-y-scroll lg:overflow-y-auto">🌏 Навчаю учнів з <b>6+</b> країн </li>
            <li className="sm:text-[20px] lg:text-[28px] lg:leading-[80px] sm:overflow-y-scroll lg:overflow-y-auto">🚀 Саме моє пояснення допомагало іншим</li>
           </ol>  */}

           {discussionList?.map((disscussion: any, indx: number) => {
                return (
                 <>
                  <Accordion className="text-3xl font-bold bg-transparent sm:m-4 lg:m-1">
                    <AccordionSummary
                      className="bg-transparent text-textColor"
                      expandIcon={<IconArrowCard fill="black" />}
                      aria-controls={disscussion.topic}
                      id={ disscussion.topic + `${"-" + disscussion.speaker}` }
                    >
                      {disscussion.topic}
                    </AccordionSummary>
                    <AccordionDetails className="sm:m-3 lg:m-2 rounded-full text-xl text-textColor bg-white">
                     {disscussion.speaker}
                    </AccordionDetails>
                  </Accordion>
                 </>
                );
              })}
          </div>
          {/* 2 variant */}
          
          
        </div>
      </div>
    </>
  );
};

export default About;
