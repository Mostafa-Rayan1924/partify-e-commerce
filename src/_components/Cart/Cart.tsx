"use client";
import { RootState } from "@/store/store";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  let { user } = useSelector((state: RootState) => state.loginSlice);
  return (
    user.token && (
      <Link href={"/cart"} className="relative">
        <ShoppingCart size={25} className="text-primary" />
        <div className="absolute -top-3 left-3 text-white bg-red-500 text-sm text-center  rounded-full w-4 h-4 flex justify-center items-center">
          9
        </div>
      </Link>
    )
  );
};

export default Cart;
