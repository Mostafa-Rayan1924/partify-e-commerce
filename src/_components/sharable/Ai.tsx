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
import { Bot, Copy, OctagonX } from "lucide-react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return toast.error("Leave a message");
    setLoading(true);
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: [{ text: msg }],
      });
      setRes(response.text as string);
    } catch (error) {
      toast.error("An error occurred while fetching AI response.");
    } finally {
      setLoading(false);
    }
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
        <DialogContent className="  sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Ask Ai For Your Car</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                  placeholder="Your message"
                  className="col-span-3"
                />
                <Button className="col-span-1">Ask</Button>
              </div>
            </div>
            <DialogFooter className="relative w-full">
              <div className="w-full border rounded-lg overflow-hidden border-border">
                {res && (
                  <div className="bg-accent p-2 duration-300 flex items-center justify-end pr-5  h-10">
                    <div className="flex items-center  gap-2 ">
                      <OctagonX
                        onClick={() => setRes("")}
                        size={22}
                        className=" text-red-500  cursor-pointer"
                      />
                      <Copy
                        onClick={async () => {
                          await navigator.clipboard.writeText(res);
                          toast.success("Copied to clipboard");
                        }}
                        size={22}
                        className="text-muted-foreground  cursor-pointer"
                      />
                    </div>
                  </div>
                )}
                {loading && <Loader />}

                <textarea
                  placeholder="Welcome ... ask anything"
                  className="w-full h-60  leading-relaxed bg-background  resize-none p-2 text-sm overflow-y-auto"
                  value={loading ? "loading..." : res}
                  onChange={(e) => setRes(e.target.value)}
                />
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Ai;
