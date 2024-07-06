import LockSection from "@/containers/Earn/LockSection/LockSection";
import StakeEarnSection from "@/containers/Earn/StakeEarnSection/StakeEarnSection";
import React from "react";

const Earn = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto">
        <StakeEarnSection />
        <LockSection />
      </div>
    </div>
  );
};

export default Earn;
