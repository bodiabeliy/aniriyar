import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { IconArrowCard } from "../icons/Arrow";

import { discussionList } from "@/./utils/data";

const About = () => {
  return (
    <>
      <div className="bg-aboutSection h-2screens bg-bottom flex justify-end">
        <div id="about" className="w-[1000px] sm:mt-10 lg:mt-32 ">
          <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">About event:</p>
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
          </div>
          <div id="topics" className="topicsListExpandedWrapper max-w-[800px]">
            <p className="sm:text-4xl lg:text-6xl sm:text-center lg:text-left font-bold ">Discussion topics:</p>
            <div className="topicsListExpanded mt-10 h-[600px] sm:overflow-y-scroll lg:overflow-y-auto">
              {discussionList?.map((disscussion: any, indx: number) => {
                return (
                 <>
                  <Accordion className="text-3xl font-bold bg-transparent">
                    <AccordionSummary
                      className="bg-transparent text-textColor"
                      expandIcon={<IconArrowCard fill="white" />}
                      aria-controls={disscussion.topic}
                      id={ disscussion.topic + `${"-" + disscussion.speaker}` }
                    >
                      {disscussion.topic}
                    </AccordionSummary>
                    <AccordionDetails className="rounded-full text-xl text-textColor bg-purpure">
                     {disscussion.speaker}
                    </AccordionDetails>
                  </Accordion>
                 </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
