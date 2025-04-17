import { Project } from "@/types/type";
import { Captions, CircleDollarSign } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AddToCartBox from "../Cart/AddToCartBox";

const ProjectBox = ({ item }: { item: Project }) => {
  return (
    <div className="relative ">
      <Link className="space-y-3" href={`/shop/${item._id}`} key={item._id}>
        <div className="w-full  h-[250px] relative">
          <Image
            className="rounded-lg"
            src={item.images[0]}
            alt={item.title}
            fill
          />
        </div>
        <h2 className="flex items-center gap-2 ">
          <Captions className="size-6 text-primary" />
          <span className="line-clamp-1">{item.title}</span>
        </h2>
        <h2 className="text-muted-foreground flex items-center gap-2 ">
          <CircleDollarSign className="size-6 text-primary" />
          {item.price}$
        </h2>
      </Link>

      <div className="mt-3">
        <AddToCartBox data={item} />
      </div>
    </div>
  );
};

export default ProjectBox;
