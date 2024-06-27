import SelectVariantOne from "@/components/ui/SelectVariantOne";
import PresaleFilterTopBar from "@/containers/presale/PresaleFilterTopBar";
import React from "react";

const Presale = () => {
  return (
    <main className="border-[1px] border-b-[0px] mx-[20px] my-[10px] border-neutral-0 h-[100vh]">
      <div className="py-[50px] px-[50px]">
        {/* Top Bar */}
        <PresaleFilterTopBar />

        {/* Presale List */}
      </div>
    </main>
  );
};

export default Presale;
