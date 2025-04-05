import About from "@/_components/Home/About";
import Faq from "@/_components/Home/Faq";
import ContactForm from "@/_components/sharable/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "شركة إم جي | عنا",
  description: "شركة ام جي للمقاولات العامة واعمال البحر",
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
