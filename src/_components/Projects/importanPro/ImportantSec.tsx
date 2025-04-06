import BallAnimation from "@/_components/sharable/BallAnimation";
import CircleIcon from "@/_components/sharable/CircleIcon";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const ImportantSec = () => {
  return (
    <section className="relative">
      <BallAnimation
        blur="blur-2xl hidden md:block"
        x={"-left-6"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />

      <CircleIcon
        y={"bottom-0"}
        x={"right-0"}
        color={"text-primary hidden md:block"}
      />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2  md:gap-8">
        <div>
          <div className="max-w-lg md:max-w-none space-y-4">
            <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
              Our Products at <span className="text-primary">Partify</span>
            </h2>
            <p className="leading-[2] text-muted-foreground">
              At Partify, we offer a wide range of high-quality automotive
              products designed to enhance both the performance and aesthetic of
              your vehicle. From exterior accessories to interior upgrades, our
              products are crafted with precision and durability in mind.
              Whether you're looking to improve your car's functionality, style,
              or comfort, Partify provides innovative solutions that cater to
              every need of car enthusiasts. Explore our extensive collection to
              discover the perfect products that suit your automotive
              preferences.
            </p>
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <Link href={"/about"}>
                <Button
                  className={cn(buttonVariants({ size: "lg" }), "text-white")}>
                  Read More
                </Button>
              </Link>
              <Link href={"/contact"}>
                <Button
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" })
                  )}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-[350px] size-full relative">
          <Image
            src="https://res.cloudinary.com/dlaeaq6is/image/upload/v1743975459/1910.i101.035_car_parts_spares_isometric_set_gqwn6f.jpg"
            className="rounded object-cover "
            alt="image"
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default ImportantSec;
