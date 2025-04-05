import { buttonVariants } from "@/components/ui/button";
import SquareIcon from "../sharable/SquareIcon";
import Link from "next/link";
import CircleIcon from "../sharable/CircleIcon";
import BallAnimation from "../sharable/BallAnimation";

const About = ({ show }: { show: boolean }) => {
  return (
    <section className="relative mt-6 sm:mt-0 ">
      <SquareIcon
        y={"-bottom-5"}
        x={"start-10 sm:start-40 animate-pulse"}
        color={"text-foreground"}
      />
      <BallAnimation
        blur="blur-3xl"
        x={"right-0"}
        y={"top-0"}
        w={"w-[200px]"}
        h={"h-[200px]"}
      />
      <div className="container">
        <div className="max-w-[700px]  relative p-4 sm:p-6 mx-auto bg-background/90 border border-border rounded-lg">
          <CircleIcon y={"-top-5"} x={"end-0"} color={"text-primary"} />
          <div className="flex flex-col gap-y-4 text-start">
            <h2 className="font-semibold text-xl text-primary">Our Message</h2>
            <h3 className="text-2xl font-bold text-foreground">
              Know more about us
            </h3>
            <p
              className={` text-muted-foreground ${
                show && "line-clamp-4"
              }  leading-relaxed`}>
              At Partify, we're driven by a passion for cars and a commitment to
              quality. Founded with the goal of becoming a trusted name in the
              automotive industry, we specialize in genuine auto parts,
              high-performance batteries, premium engine oils, and a wide range
              of car care products and accessories. We understand how important
              reliability and performance are when it comes to your vehicle.
              That's why we carefully select every product we offer, partnering
              with leading manufacturers to ensure top-notch quality and
              long-lasting value. Whether you're a car owner, a workshop, or a
              reseller, Partify is here to provide everything you need to keep
              your vehicle running smoothly.
            </p>
            {show && (
              <div className="text-center ">
                <Link
                  href={`/about`}
                  className={buttonVariants({ size: "lg" })}>
                  Read More
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
