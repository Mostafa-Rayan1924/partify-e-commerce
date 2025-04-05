import { LucideIcon } from "lucide-react";
import React from "react";

export interface servType {
  id: number;
  title: string;
  desc?: string;
  icon: LucideIcon;
}
export interface Project {
  _id: string;
  title: string;
  images: string[];
  category: string;
  price: number;
  __v: number;
}
export interface Faq {
  question: string;
  answer: string;
}
export interface busInfo {
  id: number;
  title: string;
  title2?: string;
  icon: LucideIcon;
}
export interface servPage {
  id: number;
  title: string;
  desc: string;
  img: string;
}
export enum btns {
  "الكل" = "",
  "انشاءات بحريه" = "Marine-constructions",
  "انشاءات عامه" = "Public-constructions",
}

export interface ContactItem {
  id: number;
  icon: LucideIcon;
  title: string;
  desc: string;
}
