import React from "react";
import TokenSelectionSection from "./TokenSelectionSection";

const StakeSection = () => {
  return (
    <div>
      <h4 className="text-neutral-0 font-[600] text-[18px]">
        Lock $FOMO, get $fFOMO
      </h4>

      <div className="mt-[30px] flex w-full gap-[30px]">
        <div className="w-full">
          <TokenSelectionSection />
        </div>
        <div className="w-full">
          <TokenSelectionSection />
        </div>
      </div>

      <button className="mt-[30px] bg-custom-radial text-neutral-0 py-[10px] px-[30px] rounded-[5px]">
        Stake
      </button>
    </div>
  );
};

export default StakeSection;
