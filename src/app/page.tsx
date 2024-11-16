import About from "@/components/About/About";
import PriceList from "@/components/PriceList/PriceList";
import SpeakersAndSponsors from "@/components/SpeakersAndSponsors/SpeakersAndSponsors";
import Banner from "@/components/banner/Banner";


export const metaData ={
  openGraph:{
    title:"AniriYar",
    description:"Твій репетитор з англійської та французької мов",
    keywords:["репетитор", "репетитор з англійської", "англійська мова", "англійська за 1 хвилину", "вивчення англійської мови", "уроки англійської", "французька мова", "репетитор з французької мови", "французька 1 хвилину",  "вивчення французької мови", "уроки французької"],
    icons: {
      icon: "@/../../public/see you later.png"
    },
  }
  
}

export default function Home() {
  
  return (
    <>
      <div className=" lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
        <Banner />
        {/* <Countdown /> */}
      </div>

      <About />
      <SpeakersAndSponsors />
      {/* <Form /> */}
      <PriceList />
    </>
  );
}
