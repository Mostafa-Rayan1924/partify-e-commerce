"use client";
import { CartItems } from "@/store/CartSlice/GetCart";
import { AppDispatch, RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  let { user } = useSelector((state: RootState) => state.loginSlice);
  const { products, loading } = useSelector(
    (state: RootState) => state.getCart
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(CartItems());
  }, []);

  return (
    user.token && (
      <Link href={"/cart"} className="relative">
        <ShoppingCart size={25} className="text-primary" />
        <div
          className={`absolute -top-3 left-3 text-white bg-red-500 text-sm text-center ${
            loading && "animate-pulse"
          }  rounded-full w-4 h-4 flex justify-center items-center`}>
          {products.length > 9 ? "9+" : products.length}
        </div>
      </Link>
    )
  );
};

export default Cart;
