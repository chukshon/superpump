import React from "react";
import InputTab from "@/containers/Earn/components/InputTab";
import TokenSelectorVariantOne from "@/containers/Earn/components/TokenSelectorVariantOne";
import GroupItem from "../GroupItem";

const SponsorshipSection = () => {
  return (
    <div className="flex gap-[40px] py-[40px] justify-center">
      <div className="w-[40%] lg:w-[30%] xl:w-[25%]">
        <TokenSelectorVariantOne />
        <ul className="flex gap-[10px] justify-between w-full mt-[20px]">
          <InputTab value="25%" />
          <InputTab value="50%" />
          <InputTab value="75%" />
          <InputTab value="Max" />
        </ul>
        <div className="mt-[10px] flex justify-end">
          <button className=" text-[13px] bg-custom-radial text-neutral-0 py-[5px] px-[30px] rounded-[4px]">
            Confirm
          </button>
        </div>
      </div>
      <div className="flex gap-[20px]">
        <GroupItem label="Votes" value="23%" className="gap-[15px]" />
        <GroupItem
          label="Reward / Incentive"
          value="$1,223,223"
          className="gap-[15px]"
        />
      </div>
    </div>
  );
};

export default SponsorshipSection;
