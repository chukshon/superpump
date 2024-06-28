import PresaleBasicInfo from "@/containers/presaleDetails/PresaleBasicInfo";
import React from "react";

const PresaleDetails = () => {
  return (
    <div>
      {/* Alert bar */}
      <div className="bg-[#1B488B] w-full py-[10px] text-center text-[16px] text-neutral-0">
        Make sure the website is https://fomotrading.fomo
      </div>

      {/* Grid */}
      <div className="flex gap-[20px] flex-col xl:flex-row my-[20px] mx-[20px] xl:mx-[40px] lg:mx-auto max-w-[1360px]">
        {/* Left Col */}
        <div className="xl:w-[60%] h-[100vh] lg:border-one rounded-[8px] md:px-[20px] md:py-[10px]">
          <PresaleBasicInfo />
        </div>
        {/* Right Col */}
        <div className="xl:w-[40%] h-[100vh] lg:border-one rounded-[8px]"></div>
      </div>
    </div>
  );
};

export default PresaleDetails;
