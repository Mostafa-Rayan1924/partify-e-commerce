import { getAllProjects } from "@/callingApi/projects";
import MainTitle from "../sharable/MainTitle";
import SwiperProject from "./SwiperProject";

const LatestPro = async () => {
  let data = await getAllProjects();
  if (!data) {
    return <p className="text-center text-red-500">No Products Available</p>;
  }

  return (
    <section>
      <MainTitle title="Our Products" />
      <div className="w-[90%] mx-auto">
        <SwiperProject data={data} />
      </div>
    </section>
  );
};

export default LatestPro;
