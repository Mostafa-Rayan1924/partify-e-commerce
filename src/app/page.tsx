import About from "@/_components/Home/About";
import Ads from "@/_components/Home/Ads";
import Hero from "@/_components/Home/Hero";
import LatestPro from "@/_components/Home/LatestPro";
import ServicrsHome from "@/_components/Home/ServicrsHome";
import Suppliers from "@/_components/Home/Suppliers";
import ContactForm from "@/_components/sharable/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Partify",
  description:
    "At Partify, we're passionate about cars and committed to quality. Explore our selection of genuine auto parts, high-performance batteries, premium engine oils, and top-tier car care products. Trusted by car owners, workshops, and resellers across Egypt.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="space-y-14 mb-10 lg:space-y-20">
        <About show={true} />
        <LatestPro />
        <ServicrsHome />
        <Ads />
        <Suppliers />
        <ContactForm />
      </div>
    </main>
  );
}
