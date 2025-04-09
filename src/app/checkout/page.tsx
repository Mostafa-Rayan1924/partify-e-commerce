"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input"; // Assuming this is your input component from Shadcn UI
import { Button } from "@/components/ui/button"; // Assuming this is your button component from Shadcn UI
import { Label } from "@/components/ui/label"; // Assuming this is your label component from Shadcn UI
import toast from "react-hot-toast";
import axios from "axios";

// Validation schema using zod
const checkoutSchema = z.object({
  cardNumber: z
    .string()
    .min(16, { message: "Card number must be 16 digits" })
    .max(16, { message: "Card number must be 16 digits" })
    .regex(/^[0-9]+$/, { message: "Card number must be only digits" }),
  expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/(2[3-9]|3[0-9])$/, {
    message: "Invalid expiry date format (MM/YY)",
  }),
  cvv: z
    .string()
    .min(3, { message: "CVV must be 3 digits" })
    .max(3, { message: "CVV must be 3 digits" })
    .regex(/^[0-9]+$/, { message: "CVV must be only digits" }),
  nameOnCard: z.string().min(3, { message: "Name on card is required" }),
});

const CheckoutPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      cardNumber: "2424242424242424",
      expiryDate: "12/24",
      cvv: "123",
      nameOnCard: "John Doe",
    },
    resolver: zodResolver(checkoutSchema),
  });

  const onSubmit = async (data: any) => {
    toast.success("Payment successful!");
    let res = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/partify/cart/clear`,
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("LoggedUser")!).token
          }`,
        },
      }
    );
    if (res.status === 200) {
      reset();
      setTimeout(() => {
        window.location.href = "/";
      }, 1000);
    }
  };

  return (
    <div className="mt-[140px] mb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-sm mx-auto">
        <h2 className="text-3xl font-semibold text-center">Checkout</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          {/* Card Number */}
          <div className="space-y-1">
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              type="text"
              placeholder="Enter your card number"
              {...register("cardNumber")}
              className="w-full"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm">
                {errors.cardNumber.message}
              </p>
            )}
          </div>

          {/* Expiry Date */}
          <div className="space-y-1">
            <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
            <Input
              id="expiryDate"
              type="text"
              placeholder="MM/YY"
              {...register("expiryDate")}
              className="w-full"
            />
            {errors.expiryDate && (
              <p className="text-red-500 text-sm">
                {errors.expiryDate.message}
              </p>
            )}
          </div>

          {/* CVV */}
          <div className="space-y-1">
            <Label htmlFor="cvv">CVV</Label>
            <Input
              id="cvv"
              type="text"
              placeholder="Enter your CVV"
              {...register("cvv")}
              className="w-full"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm">{errors.cvv.message}</p>
            )}
          </div>

          {/* Name on Card */}
          <div className="space-y-1">
            <Label htmlFor="nameOnCard">Name on Card</Label>
            <Input
              id="nameOnCard"
              type="text"
              placeholder="Enter your name"
              {...register("nameOnCard")}
              className="w-full"
            />
            {errors.nameOnCard && (
              <p className="text-red-500 text-sm">
                {errors.nameOnCard.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <Button type="submit" className="w-full sm:w-auto">
              Submit Payment
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
