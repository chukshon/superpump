import React from "react";
import DurationSelector from "../../components/DurationSelector";
import TokenSelectorVariantOne from "../../components/TokenSelectorVariantOne";

const StakeSection = () => {
  return (
    <div>
      <h4 className="text-neutral-0 font-[600] text-[19px]">
        Lock $FOMO, get $fFOMO
      </h4>

      <div className="mt-[20px] lg:mt-[30px] flex flex-col lg:flex-row w-full gap-[30px]">
        <div className="w-full max-w-[600px]">
          <TokenSelectorVariantOne label="Add token" />
        </div>
        <div className="w-full max-w-[600px]">
          <DurationSelector label="Add Duration" />
        </div>
      </div>

      <button className="hidden lg:block mt-[30px] bg-custom-radial text-neutral-0 py-[10px] px-[30px] rounded-[5px]">
        Stake
      </button>
    </div>
  );
};

export default StakeSection;
