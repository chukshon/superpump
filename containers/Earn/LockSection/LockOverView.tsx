import GroupDetails from "@/containers/presaleDetails/components/GroupDetails";
import React from "react";

const LockOverView = () => {
  return (
    <div className="lg:border-l-[rgba(71,167,255,0.24)] lg:border-l-[1px] lg:pl-[50px]">
      <h2 className="text-neutral-0 text-[18px] font-[600]">Lock Overview</h2>

      <h4 className="text-[#47A7FF] font-[700] text-[14px] mt-[30px]">
        My fFOMO
      </h4>
      <div className="bg-[#1B488B] flex justify-between items-center px-[10px] py-[5px] mt-[10px]">
        <p className="text-neutral-0">1,223.08</p>
        <p className="text-[#47A7FF] font-[700]">fFOMO</p>
      </div>

      <div className="flex flex-col gap-[10px] mt-[15px] lg:mt-[30px]">
        <GroupDetails label="Total APR" value="Up to 12.23%" />
        <GroupDetails label="fFOMO Pool APR" value="Up to 3.33%" />
        <GroupDetails label="Revenue Sharing APR" value="Up to 3.33%" />
        <GroupDetails label="Sponsorship APR" value="Up to 12.23%" />
        <GroupDetails label="FOMO to be locked" value="1,223" />
        <GroupDetails label="Factor" value="2x" />
        <GroupDetails label="Duration" value="56 Weeks" />
        <GroupDetails label="Unlocked Date" value="Aug 03 2025 12:23PM" />
      </div>
    </div>
  );
};

export default LockOverView;
