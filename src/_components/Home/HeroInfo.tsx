import { Button, buttonVariants } from "@/components/ui/button";
import { services } from "@/constants/Services";
import { cn } from "@/lib/utils";
import { servType } from "@/types/type";
import Link from "next/link";
const HeroInfo = () => {
  return (
    <div className="col-span-3 relative mt-[30px] lg:mt-[80px]">
      <div className=" space-y-4 xl:space-y-6">
        <h2 className="text-2xl  sm:text-3xl text-center lg:text-start lg:text-5xl font-bold">
          Welcome to <span className="text-primary capitalize">partify </span>
          company
        </h2>
        <p className="text-muted-foreground leading-7 text-center sm:text-start lg:max-w-[70%]">
          Partify is your ultimate destination for everything automotive. We
          specialize in providing high-quality car parts, durable batteries,
          premium engine oils, and a wide range of automotive products and
          accessories. Whether you're a car owner or a repair shop, Partify
          offers reliable solutions to keep your vehicle running at its best.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <Link href={"/about"}>
            <Button
              className={cn(
                buttonVariants({ size: "lg" }),
                "text-white capitalize"
              )}>
              read more
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" })
              )}>
              Call us
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-10">
        <h3 className="text-2xl font-semibold">services :</h3>
        <div className="grid grid-cols-2 md:grid-cols-4  gap-3 mt-4 ">
          {services.map((service: servType) => (
            <div
              key={service.id}
              className="flex flex-col  gap-2 hover:border-primary duration-300 odd:hover:-translate-y-2.5    bg-accent py-4 even:bg-transparent even:border-border even:border-2 px-6 rounded-lg">
              <service.icon className="w-8 h-8 text-primary  " />
              <h2 className="font-semibold text-lg">{service.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroInfo;
