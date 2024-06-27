import SelectVariantOne from "@/components/ui/SelectVariantOne";
import React from "react";

const PresaleFilterTopBar = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[20px]">
      {/* Input */}
      <input
        placeholder="Type token symbol or address to find your Sale"
        className="py-[10px] px-[10px] lg:w-[50%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4ACC] text-neutral-50 active:bg-[transparent] placeholder:font-[600] font-space_grotesk border-[1px]"
      />
      {/* Filters container */}
      <div className="flex gap-[10px] flex-col lg:flex-row">
        <SelectVariantOne className="lg:min-w-[250px]" />
        <SelectVariantOne className="lg:min-w-[250px]" />
      </div>
    </div>
  );
};

export default PresaleFilterTopBar;
