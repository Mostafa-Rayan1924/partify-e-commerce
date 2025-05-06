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
import { CarTaxiFront, Copy, OctagonX } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "./Loader";
import axios from "axios";

const AiModel = () => {
  let [msg, setMsg] = useState<string>("");
  let [res, setRes] = useState<any>();
  let [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!msg.trim()) return toast.error("Leave a message");

    setLoading(true);
    setRes("");

    try {
      const response = await axios.post(
        "https://42e2a390-24e4-4aee-8b9d-6241faae8af9-00-5ief370lapz5.spock.replit.dev/predict",
        {
          brand: msg, // هذه هي البيانات المطلوبة
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setRes(response.data.match); // عرض النتيجة
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while fetching AI response.");
    } finally {
      setLoading(false);
      setMsg("");
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-50">
      <Dialog>
        <DialogTrigger asChild>
          <div className="grid bg-background place-items-center hover:border-pink-500 duration-200 border border-border p-2 size-12 cursor-pointer rounded-lg">
            <CarTaxiFront size={22} />
          </div>
        </DialogTrigger>
        <DialogContent className="  sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Know more about your brand by Ai</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Input
                  onChange={(e) => setMsg(e.target.value)}
                  value={msg}
                  placeholder="Write your brand"
                  className="col-span-3 "
                />
                <Button className="col-span-1 bg-green-500 hover:bg-green-600">
                  Ask
                </Button>
              </div>
            </div>
            <DialogFooter className="relative w-full">
              <div className="flow-root w-full">
                {res && (
                  <div className="  flex items-center justify-end  h-10">
                    <div className="flex items-center  gap-2 ">
                      <OctagonX
                        onClick={() => setRes("")}
                        size={22}
                        className=" text-red-500  cursor-pointer"
                      />
                    </div>
                  </div>
                )}
                {loading && <Loader />}
                {res ? (
                  <div className=" divide-y w-full  max-h-[400px] overflow-y-auto divide-border rounded border border-border text-sm *:even:bg-">
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Fuel Type</dt>

                      <dd className="text-gray-700 sm:col-span-2">
                        {res?.fuel_type}
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">engine displacement</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.engine_displacement}
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">no_Cylinders</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.no_cylinder}
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Setting Capacity</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.seating_capacity}
                      </dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Fuel Tank Capacity</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.fuel_tank_capacity}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Transmisson Type</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.transmission_type}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Body Type</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.body_type}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Max torque nm</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.max_torque_nm}
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-3 sm:gap-4">
                      <dt className="font-medium ">Max torque rpm</dt>

                      <dd className="text-muted-foreground sm:col-span-2">
                        {res?.max_torque_rpm}
                      </dd>
                    </div>
                  </div>
                ) : (
                  <p className="text-center">We Wait for your question</p>
                )}
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AiModel;
