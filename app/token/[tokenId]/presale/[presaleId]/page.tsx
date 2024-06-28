import Divider from "@/components/ui/Divider";
import About from "@/containers/presaleDetails/About";
import PoolInfo from "@/containers/presaleDetails/PoolInfo";
import PresaleBasicInfo from "@/containers/presaleDetails/PresaleBasicInfo";
import PresaleProgress from "@/containers/presaleDetails/PresaleProgress";

import React from "react";

const PresaleDetails = () => {
  return (
    <div>
      {/* Alert bar */}
      <div className="bg-[#1B488B] w-full py-[10px] text-center text-[16px] text-neutral-0">
        Make sure the website is https://fomotrading.fomo
      </div>

      {/* Grid */}
      <div className="flex gap-[20px] flex-col xl:flex-row my-[20px] mx-[20px] lg:mx-[40px] xl:mx-auto max-w-[1500px]">
        {/* Left Col */}
        <div className="xl:w-[60%] lg:border-one rounded-[8px] md:px-[20px] md:py-[10px]">
          <PresaleBasicInfo />
          <Divider className="bg-[#47A7FF] my-[20px]" />
          <About />
          <Divider className="bg-[#47A7FF] my-[20px]" />
          <PoolInfo />
        </div>
        {/* Right Col */}
        <div className="xl:w-[40%] lg:border-one rounded-[8px] py-[20px]">
          <PresaleProgress />
        </div>
      </div>
    </div>
  );
};

export default PresaleDetails;
