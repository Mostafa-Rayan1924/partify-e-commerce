import { getProjectById } from "@/callingApi/projects";
import { Captions, CircleDollarSign, FileDigit, Truck } from "lucide-react";
import SwiperCard from "./SwiperCard";
import MainTitle from "@/_components/sharable/MainTitle";
import { Button } from "@/components/ui/button";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/partify/subCategory/getone/${
      (
        await params
      ).id
    }`
  );
  const product = await res.json();
  return {
    title: product.data.doc.title,
  };
}
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  let data = await getProjectById(id);
  console.log("first");
  console.log(data);
  return (
    <section className="mt-[140px] mb-20">
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* gallery */}
        <SwiperCard images={data?.images} />
        {/* info side */}
        <div className="space-y-6 h-fit border border-border rounded-lg py-7 px-4">
          <div className="mt-2">
            <MainTitle title="product info" />
          </div>
          <div className="flex items-center gap-2">
            <Captions className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg font-semibold">
              title: {data?.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <CircleDollarSign className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              price: {data?.price}$
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Truck className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              Delivery : Available for delivery
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <FileDigit className="text-primary size-6 mt-[2px]" />
            <h2 className="text-base sm:text-lg text-muted-foreground font-semibold">
              Count in Market : unlimited
            </h2>
          </div>
          <div>
            <Button className="w-full">Add to Cart</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;
