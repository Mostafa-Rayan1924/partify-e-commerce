import About from "@/_components/Home/About";
import Faq from "@/_components/Home/Faq";
import ContactForm from "@/_components/sharable/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Partify",
  description:
    "Learn about Partify, your trusted source for genuine auto parts, high-performance batteries, premium engine oils, and car care accessories. We're committed to quality and reliability to keep your vehicle performing at its best.",
};

const page = () => {
  return (
    <section style={{ marginTop: "140px" }} className=" space-y-10 !mb-10 ">
      <About show={false} />
      <Faq />
      <ContactForm />
    </section>
  );
};

export default page;
