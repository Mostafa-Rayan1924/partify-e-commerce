import ContactForm from "@/_components/sharable/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Partify",
  description:
    "Have questions or need support? Reach out to the Partify team through our contact form or using the provided contact information. We're here to assist you with all your automotive needs.",
};

const page = () => {
  return (
    <section className="mt-[140px] mb-10">
      <ContactForm />
    </section>
  );
};

export default page;
