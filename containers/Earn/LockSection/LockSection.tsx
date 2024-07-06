import React from "react";
import LockOverView from "./LockOverView";
import StakeSection from "./StakeSection/StakeSection";

const LockSection = () => {
  return (
    <div className=" px-[20px] lg:px-[30px]">
      <div className="lg:border-[#172532] lg:border-[1px] rounded-[8px] px-[0px] lg:px-[40px] lg:py-[30px]">
        <div className="flex">
          <div className="w-[70%]">
            <StakeSection />
          </div>
          <div className="w-[30%]">
            <LockOverView />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockSection;
