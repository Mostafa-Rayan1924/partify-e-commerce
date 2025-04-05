import Image from "next/image";
import HeroInfo from "./HeroInfo";
import BallAnimation from "../sharable/BallAnimation";
import SquareIcon from "../sharable/SquareIcon";
import { getPosters } from "@/callingApi/banner";
import HeroCarousel from "./HeroCarousel";

const Hero = async () => {
  let data = await getPosters();
  return (
    <section className="mt-[100px] min-h-screen  sm:min-h-[80vh] mb-10 relative">
      <BallAnimation
        blur="blur-3xl"
        x={"left-0"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />
      <SquareIcon
        y={"top-6 "}
        x={"left-10"}
        color={"text-blue-500 hidden md:block"}
      />
      <div className="container grid grid-cols-1 lg:grid-cols-5 gap-6">
        <HeroInfo />
        <HeroCarousel data={data} />
      </div>
    </section>
  );
};

export default Hero;
