"use client";

import * as React from "react";
import { Computer, Moon, MoonIcon, Sun, SunDim } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={` ${theme === "light" ? "bg-accent my-[2px] " : ""}`}
          onClick={() => setTheme("light")}>
          <div className="flex items-center gap-1 capitalize cursor-pointer">
            <SunDim className="size-4 mt-[2px]" />
            light mode
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={` ${theme === "dark" ? "bg-accent my-[2px] " : ""}`}
          onClick={() => setTheme("dark")}>
          <div className="flex items-center gap-1 capitalize cursor-pointer">
            <MoonIcon className="size-4 mt-[2px]" />
            dark mode
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={` ${theme === "system" ? "bg-accent my-[2px] " : ""}`}
          onClick={() => setTheme("system")}>
          <div className="flex items-center gap-1 capitalize cursor-pointer">
            <Computer className="size-4 mt-[2px]" />
            system
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
