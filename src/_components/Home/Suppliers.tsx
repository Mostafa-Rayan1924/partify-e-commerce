import { getSuppliers } from "@/callingApi/suppliers";
import MainTitle from "../sharable/MainTitle";
import SuppliersCarousel from "./SuppliersCarousel";

const Suppliers = async () => {
  let data = await getSuppliers();
  return (
    <section>
      <MainTitle title="our partners" />
      <div className="container">
        <SuppliersCarousel data={data} />
      </div>
    </section>
  );
};

export default Suppliers;
