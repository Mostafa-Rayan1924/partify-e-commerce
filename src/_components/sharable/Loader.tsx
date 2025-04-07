import { Loader2 } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div className="absolute grid place-items-center  size-full">
      <Loader2 className="animate-spin size-10 text-primary text-center " />
    </div>
  );
};

export default Loader;
