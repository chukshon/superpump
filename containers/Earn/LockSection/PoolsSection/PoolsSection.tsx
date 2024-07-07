import SelectVariantOne from "@/components/ui/SelectVariantOne";
import React from "react";

const PoolsSection = () => {
  return (
    <div className="mt-[50px]">
      {/*Search Input and filter section */}
      <div className="flex flex-col justify-between gap-[20px] lg:gap-[50px] lg:flex-row">
        <div className="w-full flex items-center gap-[10px]">
          <input
            placeholder="Search Pools"
            className="z-40 py-[10px] px-[10px] w-full lg:w-[70%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4ACC] text-neutral-50 active:bg-[transparent] placeholder:font-[600] font-space_grotesk border-[1px] rounded-[4px]"
          />
          <button
            type="button"
            className="hidden lg:block text-neutral-0 border-[2px] border-[#47A7FF] bg-[#0D0D0D] rounded-[4px] py-[10px] px-[10px]"
          >
            Create New Pair
          </button>
        </div>
        {/* Filters container */}
        <div className="flex gap-[10px] flex-col lg:flex-row">
          <SelectVariantOne className="lg:min-w-[150px]" />
          <SelectVariantOne className="lg:min-w-[150px]" />
        </div>
      </div>

      {/* Pools List */}
      <div>Pools list</div>
    </div>
  );
};

export default PoolsSection;
