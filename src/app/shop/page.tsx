import FilterProjects from "@/_components/Projects/FilterProjects";
import ImportantSec from "@/_components/Projects/importanPro/ImportantSec";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Shop | Partify",
  description:
    "Explore our extensive selection of genuine auto parts, high-performance batteries, premium engine oils, and car care accessories. Shop now to ensure your vehicle's optimal performance and longevity.",
};

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ category: string }>;
}) => {
  const { category } = (await searchParams) || "All";
  return (
    <section
      style={{ marginTop: "140px" }}
      className="!mb-10 space-y-14  lg:space-y-20 container">
      <ImportantSec />
      <FilterProjects category={category} />
    </section>
  );
};

export default page;
