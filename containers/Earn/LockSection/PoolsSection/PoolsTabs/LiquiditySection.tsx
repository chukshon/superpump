import InputTab from "@/containers/Earn/components/InputTab";
import TokenSelectorVariantOne from "@/containers/Earn/components/TokenSelectorVariantOne";
import React from "react";
import { PiSwapBold } from "react-icons/pi";

const LiquiditySection = () => {
  return (
    <div className="py-[40px]">
      <div className="flex justify-center gap-[30px]">
        {/* Swap Section */}
        <div className="flex gap-[10px] relative">
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

          {/* Swap Icon */}
          <div className="relative">
            <button className="top-[50px] left-[-20px] absolute h-[30px] w-[40px] bg-[#2C6397] rounded-[8px] flex justify-center items-center">
              <PiSwapBold className="text-neutral-0" size={15} />
            </button>
          </div>

          {/* Approve FTM */}
          <div className="min-w-[300px]">
            <button className="mb-[10px] text-[13px] bg-custom-radial text-neutral-0 py-[5px] px-[30px] rounded-[4px]">
              Approve FTM
            </button>
            <TokenSelectorVariantOne />
          </div>
        </div>

        {/* Add and remove Lp */}
        <div>
          <button>Add Lp</button>
          <button>Remove Lp</button>
        </div>
      </div>
    </div>
  );
};

export default LiquiditySection;
