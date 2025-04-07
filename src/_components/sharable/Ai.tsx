"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Bot } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { GoogleGenAI } from "@google/genai";
import Loader from "./Loader";

const Ai = () => {
  let [msg, setMsg] = useState<string>("");
  let [res, setRes] = useState<string>("");
  let [loading, setLoading] = useState<boolean>(false);
  const ai = new GoogleGenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY as string,
  });

  const handleSubmit = async () => {
    if (!msg.trim()) return toast.error("Leave a message");
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: [{ text: msg }],
    });
    setLoading(false);
    setRes(response.text as string);

    setMsg("");
  };
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <div className="grid bg-background place-items-center hover:border-primary duration-200 border border-border p-2 size-12 cursor-pointer rounded-lg">
            <Bot size={22} />
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ask Ai For Your Car</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                onChange={(e) => setMsg(e.target.value)}
                value={msg}
                placeholder="Your message"
                className="col-span-3"
              />
              <Button onClick={handleSubmit} className="col-span-1">
                Ask
              </Button>
            </div>
          </div>
          <DialogFooter className="relative">
            <textarea
              placeholder="Welcome ... ask anything"
              className="w-full h-60 rounded-lg leading-relaxed bg-background border border-border resize-none p-2 text-sm overflow-y-auto"
              value={loading ? "loading..." : res}
              onChange={(e) => setRes(e.target.value)}
            />
            {loading && <Loader />}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Ai;
