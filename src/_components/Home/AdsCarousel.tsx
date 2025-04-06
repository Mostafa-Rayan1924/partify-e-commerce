"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";

// Import Swiper styles
import "swiper/css";
import { useState } from "react";
import { Autoplay } from "swiper/modules";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import Image from "next/image";
const AdsCarousel = ({
  data,
}: {
  data: {
    _id: string;
    title: string;
    image: string;
    __v: number;
  }[];
}) => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="max-w-4xl mx-auto">
      <Swiper
        onSwiper={(swiper) => setSwiper(swiper)}
        modules={[Autoplay]}
        speed={1000}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="mySwiperAd w-full h-[300px] md:h-[400px]  border border-border rounded-lg ">
        {data.map(
          (
            item: {
              _id: string;
              title: string;
              image: string;
              __v: number;
            },
            index: number
          ) => (
            <SwiperSlide key={index}>
              <Image
                className="size-full object-fill"
                fill
                src={item?.image}
                alt={item?.title}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="flex items-center justify-between  mt-3 sm:mt-6 ">
        <div className="flex items-center gap-2 cursor-pointer">
          {Array.from({ length: data?.length }).map((_, index) => (
            <div
              onClick={() => swiper?.slideTo(index)}
              className={`size-4 border-2 border-border duration-300 ${
                activeIndex === index ? "border-primary " : ""
              }   rounded-full`}></div>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            className={` ${
              swiper?.isBeginning ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => swiper?.slidePrev()}
            disabled={swiper?.isBeginning}>
            <ArrowLeftCircleIcon size={30} className="hover:text-primary" />
          </button>
          <button
            className={` ${
              swiper?.isEnd ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => swiper?.slideNext()}
            disabled={swiper?.isEnd}>
            <ArrowRightCircleIcon size={30} className="hover:text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdsCarousel;
