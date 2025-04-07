"use client";

import { z } from "zod";

export const loginSchema = z.object({
  email: z.string({ message: "Enter your email" }).email("Enter a valid email"),
  password: z
    .string({ message: "Enter your password" })
    .min(6, { message: "Minimum length is 6 characters" }),
});

export const RegisterSchema = z.object({
  username: z
    .string()
    .min(2, { message: "Minimum length is 2 characters" })
    .max(50),
  email: z.string({ message: "Enter your email" }).email("Enter a valid email"),
  password: z
    .string({ message: "Enter your password" })
    .min(6, { message: "Minimum length is 6 characters" }),
  phone: z
    .string({ message: "Enter your phone number" })
    .min(11, { message: "Enter a valid phone number minimum length is 11" })
    .max(11, { message: "Enter a valid phone number maximum length is 11" })
    .optional(),
  location: z.string({ message: "Enter your location" }).optional(),
});
