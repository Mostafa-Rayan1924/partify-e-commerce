import { getAllAds } from "@/callingApi/ads";
import CircleIcon from "../sharable/CircleIcon";
import MainTitle from "../sharable/MainTitle";
import SquareIcon from "../sharable/SquareIcon";
import AdsCarousel from "./AdsCarousel";
import BallAnimation from "../sharable/BallAnimation";

const Ads = async () => {
  let data = await getAllAds();
  return (
    <section className="relative">
      <BallAnimation
        blur="blur-3xl"
        x={"left-0"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />
      <CircleIcon y={"top-0"} x={"right-10"} color={"text-muted-foreground "} />
      <SquareIcon
        y={"bottom-0"}
        x={"left-10"}
        color={"text-primary hidden lg:block "}
      />
      <MainTitle title="advertisement" />
      <div className="container">
        <AdsCarousel data={data} />
      </div>
    </section>
  );
};

export default Ads;
