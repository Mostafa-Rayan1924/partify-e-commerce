import ContactForm from "@/_components/sharable/ContactForm";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "شركة إم جي | اتصل بنا",
  description: "شركة ام جي للمقاولات العامة واعمال البحر",
};
const page = () => {
  return (
    <section className="mt-[140px] mb-10">
      <ContactForm />
    </section>
  );
};

export default page;
