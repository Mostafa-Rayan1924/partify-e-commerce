import { servType } from "@/types/type";
import { Amphora, BatteryCharging, Car, MemoryStick } from "lucide-react";

export const services: servType[] = [
  {
    id: 1,
    title: "Original Auto Parts Supply",
    desc: "We provide a wide selection of genuine and high-quality auto parts compatible with various car brands and models. Our parts are sourced from trusted manufacturers to ensure performance, durability, and safety.",
    icon: Car,
  },
  {
    id: 2,
    title: "Battery Sales & Installation",
    desc: "Keep your car powered with our range of long-lasting automotive batteries. We offer on-site installation services and expert advice to help you choose the right battery for your vehicle's needs.",
    icon: BatteryCharging,
  },
  {
    id: 3,
    title: "Premium Oil & Fluids",
    desc: "Maintain your engine's health with our top-tier engine oils, transmission fluids, and brake fluids. We only stock certified products that enhance performance, reduce wear, and extend the life of your car.",
    icon: Amphora,
  },
  {
    id: 4,
    title: "Car Accessories",
    desc: "Upgrade your ride with our collection of car accessories, from interior gadgets to exterior enhancements. We also offer a full range of car care products to keep your vehicle clean, protected, and looking brand new.",
    icon: MemoryStick,
  },
];
