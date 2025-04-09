"use client";

import { Button } from "@/components/ui/button";
import { toggleCartItem } from "@/store/CartSlice/Cart";
import { CartItems } from "@/store/CartSlice/GetCart";
import { AppDispatch, RootState } from "@/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddToCart = ({
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
    <Button
      onClick={handleToggleCart}
      disabled={isLoading}
      className={`w-full ${isLoading ? "pointer-events-none opacity-50" : ""}`}>
      {isLoading ? "Loading..." : isInCart ? "Remove from cart" : "Add to cart"}
    </Button>
  );
};

export default AddToCart;
