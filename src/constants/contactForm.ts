import { ContactItem } from "@/types/type";
import { Clock, MapPin, Phone } from "lucide-react";

export const contactForm: ContactItem[] = [
  {
    id: 1,
    icon: MapPin,
    title: "Address",
    desc: "Egypt, Ismailia, next to Amnia Shaaban Pharmacy.",
  },
  {
    id: 2,
    icon: Phone,
    title: "Contact",
    desc: "+0201156581025 +0201277841419",
  },
  {
    id: 3,
    icon: Clock,
    title: "Working Hours",
    desc: "From 9 AM to 11 PM",
  },
];
