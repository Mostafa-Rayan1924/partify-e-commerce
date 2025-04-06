"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Image from "next/image";

const FilterBtn = ({
  cats,
}: {
  cats: {
    title: string;
    _id: string;
    image: string;
  }[];
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedCategory = useMemo(
    () => searchParams.get("category"),
    [searchParams]
  );

  // Function to handle the category change
  const handleCategoryChange = (categoryId: string) => {
    if (categoryId === selectedCategory) return;
    router.push(`/shop?category=${categoryId}`, { scroll: false });
  };

  return (
    <div className="lg:max-w-[800px] mx-auto grid grid-cols-3 lg:grid-cols-5 gap-3 mb-6 sm:mb-10 ">
      {/* all */}
      <div
        onClick={() => {
          if (selectedCategory === null) return;
          router.push(`/shop`, { scroll: false });
        }}
        className={`flex text-center ${
          selectedCategory === null ? "border-primary text-primary" : ""
        } hover:border-primary duration-300 rounded-lg border-border border cursor-pointer p-2 flex-col gap-2 `}>
        <Image
          src={"/all_5334695 (1).png"}
          alt={"all"}
          width={100}
          height={100}
          className="size-[70px] sm:size-[100px] object-fill mx-auto"
        />
        <h2 className="text-sm sm:text-base">All</h2>
      </div>
      {cats.map((item) => {
        const isSelected = item._id === selectedCategory; // Check if the category is selected

        return (
          <div
            onClick={() => handleCategoryChange(item._id)}
            key={item._id}
            className={`flex text-center hover:border-primary duration-300 rounded-lg border-border border cursor-pointer p-2 flex-col gap-2 ${
              isSelected ? "border-primary text-primary" : ""
            }`}>
            <Image
              src={item.image}
              alt={item.title}
              width={100}
              height={100}
              className="size-[70px] sm:size-[100px] object-fill mx-auto"
            />
            <h2 className="text-sm sm:text-base">{item.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default FilterBtn;
