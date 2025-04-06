"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper/modules";
// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";
const HeroCarousel = ({ data }: { data: any }) => {
  return (
    <div className="col-span-2 relative overflow-hidden    grid place-items-center lg:mt-[40px]">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectCards, Autoplay]}
        className="mySwiperHero">
        {data.map((item: { image: string; name: string }, index: number) => (
          <SwiperSlide className="border shadow-lg" key={index}>
            <Image
              src={item?.image}
              alt={item?.name}
              width={500}
              height={500}
              className="rounded-lg  h-full object-fill  "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroCarousel;
