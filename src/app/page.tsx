import About from "@/components/About/About";
import { Form } from "@/components/Form";
import SpeakersAndSponsors from "@/components/SpeakersAndSponsors/SpeakersAndSponsors";
import Banner from "@/components/banner/Banner";
import Countdown from "@/widgets/Countdown/Countdown";

export default function Home() {
  return (
    <>
      <div className="lg:w-[1300px] lg:flex lg:justify-center flex-col m-auto">
        <Banner />
        {/* <Countdown /> */}
      </div>

      <About />
      <SpeakersAndSponsors />
      <Form />
    </>
  );
}
