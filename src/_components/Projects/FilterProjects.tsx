import { getAllCats, getProjectsByCat } from "@/callingApi/projects";
import MainTitle from "../sharable/MainTitle";
import ProjectBox from "../sharable/ProjectBox";
import FilterBtn from "./FilterBtn";
import { OctagonX } from "lucide-react";

async function FilterProjects({ category }: { category: string }) {
  let cats = await getAllCats();
  let data = await getProjectsByCat(category);
  return (
    <section>
      <MainTitle title="our products" />
      <FilterBtn cats={cats} />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length > 0 ? (
          data.map((item: any, i: number) => (
            <div
              key={i}
              className="border border-border p-3 rounded-lg hover:border-primary duration-300">
              <ProjectBox key={i} item={item} />
            </div>
          ))
        ) : (
          <div className="text-center flex items-center gap-2 justify-center col-span-3 w-full">
            <OctagonX size={30} className="text-red-500" />{" "}
            <h2 className="text-lg">No Products For This Category</h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default FilterProjects;
