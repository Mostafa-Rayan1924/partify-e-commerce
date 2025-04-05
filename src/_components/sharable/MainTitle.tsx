import { Kanit } from "next/font/google";

const font = Kanit({
  subsets: ["latin"],
  weight: ["400"],
});
const MainTitle = ({ title }: { title: string }) => {
  return (
    <h2
      className={`${font.className}  mb-10 text-3xl md:text-4xl capitalize lg:text-5xl font-semibold relative before:absolute before:-bottom-2 before:left-1/2 before:rounded-lg before:-translate-x-1/2 before:bg-primary before:w-8 before:h-1 text-center`}>
      {title}
    </h2>
  );
};

export default MainTitle;
