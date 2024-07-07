import InputTab from "@/containers/Earn/components/InputTab";
import TokenSelectorVariantOne from "@/containers/Earn/components/TokenSelectorVariantOne";
import React from "react";
import { PiSwapBold } from "react-icons/pi";

const LiquiditySection = () => {
  return (
    <div className="py-[40px]">
      <div className="flex  gap-[20px] justify-center items-center">
        {/* Swap Section */}
        <div className="flex gap-[10px] relative w-[60%]">
          {/* Approve ETH */}
          <div className="w-[50%]">
            <button className="mb-[10px] text-[13px] bg-custom-radial text-neutral-0 py-[5px] px-[30px] rounded-[4px]">
              Approve Eth
            </button>
            <TokenSelectorVariantOne />
            <ul className="flex gap-[10px] w-full mt-[20px]">
              <InputTab value="25%" />
              <InputTab value="50%" />
              <InputTab value="75%" />
              <InputTab value="Max" />
            </ul>
          </div>

          {/* Swap toggle */}
          <div className="relative">
            <button className="top-[55px] left-[-20px] absolute h-[30px] w-[40px] bg-[#2C6397] rounded-[8px] flex justify-center items-center">
              <PiSwapBold className="text-neutral-0" size={15} />
            </button>
          </div>

          {/* Approve FTM */}
          <div className="w-[50%]">
            <button className="mb-[10px] text-[13px] bg-custom-radial text-neutral-0 py-[5px] px-[30px] rounded-[4px]">
              Approve FTM
            </button>
            <TokenSelectorVariantOne />
          </div>
        </div>

        {/* Add and remove Lp */}
        <div className="flex flex-col gap-[10px]">
          <button className="text-[15px] bg-custom-radial text-neutral-0 py-[8px] px-[50px] rounded-[4px]">
            Add Lp
          </button>
          <button className="text-[15px] rounded-[4px] text-neutral-0 border-[2px] border-[#003CFF] py-[8px] w-full text-center">
            Remove Lp
          </button>
        </div>
      </div>
    </div>
  );
};

export default LiquiditySection;
