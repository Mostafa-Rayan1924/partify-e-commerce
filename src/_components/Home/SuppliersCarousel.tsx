"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
const SuppliersCarousel = ({
  data,
}: {
  data: { _id: string; title: string; image: string }[];
}) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2500,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="max-w-full">
      <CarouselContent className="max-w-full">
        {data.map((item, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/3 lg:basis-1/5">
            <div
              className={`border hover:border-primary duration-300  space-y-2 border-border rounded-lg p-2`}>
              <Image
                width={150}
                height={150}
                src={item?.image}
                alt={item?.title}
                className="size-[150px] object-fill mx-auto"
              />
              <h2 className="text-center capitalize">{item?.title}</h2>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="sm:block hidden">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
};

export default SuppliersCarousel;
