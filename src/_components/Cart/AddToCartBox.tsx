"use client";

import { toggleCartItem } from "@/store/CartSlice/Cart";
import { CartItems } from "@/store/CartSlice/GetCart";
import { AppDispatch, RootState } from "@/store/store";
import { Loader2, MessageCircleX, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCartBox = ({
  data,
}: {
  data: { _id: string; title: string; price: number; category: string };
}) => {
  const dispatch = useDispatch<AppDispatch>();
  let { user } = useSelector((state: RootState) => state.loginSlice);
  let router = useRouter();

  const { products } = useSelector((state: RootState) => state.getCart);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    dispatch(CartItems());
  }, [dispatch]);

  const isInCart = useMemo(() => {
    return products.some((item: any) => item.product._id === data._id);
  }, [products, data._id]);

  const handleToggleCart = async () => {
    if (!user.token) {
      router.push("/login");
      return;
    }
    setIsLoading(true);
    await dispatch(toggleCartItem(data._id));
    dispatch(CartItems());
    setIsLoading(false);
  };

  return (
    <div
      onClick={handleToggleCart}
      className={`absolute top-4 cursor-pointer right-4  z-30 bg-accent w-10 h-10 rounded-md flex items-center justify-center  ${
        isLoading ? "pointer-events-none  opacity-50" : ""
      }`}>
      {isLoading ? (
        <Loader2 className="animate-spin size-6 text-primary text-center " />
      ) : isInCart ? (
        <MessageCircleX className="text-red-500" />
      ) : (
        <ShoppingCart className="text-primary" />
      )}
    </div>
  );
};

export default AddToCartBox;
