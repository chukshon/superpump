import Divider from "@/components/ui/Divider";
import React from "react";
import VoteCard from "./components/VoteCard";

const StepThreeSection = () => {
  return (
    <div className="py-[20px] px-[20px] bg-[#0D0D0D] gap-[10px] rounded-[4px] border-[1px] border-[#1C395F] mt-[10px] lg:mt-[20px]">
      <div className="text-neutral-0 flex flex-col ">
        <h3 className="text-[25px]">Step 3</h3>
        <h1 className="text-[35px] lg:text-[40px] font-[700] max-w-[250px] lg:max-w-[unset]">
          Top Tokens get PUMPED!
        </h1>
      </div>
      <Divider className="bg-[#47A7FF3D] my-[20px]" />
      <div className="flex flex-col gap-[10px] lg:gap-[0px] lg:flex-row lg:justify-between">
        <h2 className="text-neutral-0 text-[25px] font-[700] text-center lg:text-left">
          Top Voted Tokens
        </h2>
        <input
          placeholder="Search Token Name or CA"
          className="z-40 py-[10px] px-[10px] w-full lg:w-[70%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4ACC] text-neutral-50 active:bg-[transparent] placeholder:font-[600] font-space_grotesk border-[1px] rounded-[4px]"
        />
      </div>

      {/* Vote list */}
      <ul>
        <VoteCard />
      </ul>
    </div>
  );
};

export default StepThreeSection;
