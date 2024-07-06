import React from "react";
import GroupDetails from "./GroupDetails";

const StakeEarnSection = () => {
  return (
    <div className="py-[20px] md:py-[40px] flex gap-[30px] md:gap-[80px] flex-col lg:flex-row px-[20px] lg:px-[30px]">
      {/* Left col*/}
      <div className="lg:w-[70%]">
        <span className="flex flex-col gap-[0px] md:hidden">
          <h1 className="md:text-left text-[50px] uppercase font-[700] text-neutral-0">
            Stake
          </h1>
          <span className="flex gap-[10px]">
            <p className="md:text-left text-[50px] uppercase font-[700] text-neutral-0">
              And
            </p>
            <h1 className=" bg-neutral-0 px-[10px] py-[0px] text-[50px] uppercase font-[700] text-[#003CFF]">
              Earn
            </h1>
          </span>
        </span>
        <span className="hidden md:flex items-center gap-[10px]">
          <h1 className="md:text-left text-[50px] uppercase font-[700] text-neutral-0">
            Stake And
          </h1>
          <h1 className="bg-neutral-0 px-[10px] py-[0px] text-[50px] uppercase font-[700] text-[#003CFF]">
            Earn
          </h1>
        </span>
        <p className="text-neutral-0  my-[20px]">
          Say something about staking here. Maybe a guide? Or what’s the benefit
          of staking etc. Say something about staking here. Maybe a guide? Or
          what’s the benefit of staking etc. So people know what they are up to!
        </p>
        <button className="text-[#47A7FF] font-[700] text-[18px]">
          Buy tokens here {">"}{" "}
        </button>
      </div>

      {/* Right Col */}
      <div className="max-w-[700px] lg:w-[25%] py-[10px] pr-[20px] border-[1.5px] border-[#172532] rounded-[8px] flex flex-col items-end">
        <GroupDetails title={"Epoch 01 Ends In"} desc={"6d:23h:17m:32s"} />
        <GroupDetails title={"Expected per vote"} desc={"$12.23"} />
        <GroupDetails title={"Expected Income"} desc={"$1,223.00"} />
      </div>
    </div>
  );
};

export default StakeEarnSection;
