import StepOneSection from "@/containers/Fomo/StepOneSection";
import StepTwoSection from "@/containers/Fomo/StepTwoSection";
import React from "react";

const FomoPage = () => {
  return (
    <div>
      <div className="max-w-[1400px] mx-auto py-[30px]">
        {/* Top Section */}
        <div className="flex justify-between items-center">
          <span className="flex gap-[10px]">
            <h1 className="text-neutral-0 text-[50px] font-[600]">THE</h1>
            <h1 className="w-[max-content] bg-neutral-0 px-[10px] py-[0px] text-[50px] uppercase font-[700] text-[#003CFF]">
              FOMO
            </h1>
          </span>

          <span className="text-right">
            <h3 className="text-[13px] text-[#47A7FF]">FOMO POT AMOUNT:</h3>
            <h1 className="text-[23px] text-neutral-0">$1,223,000.00</h1>
          </span>
        </div>
        <div className="flex mt-[40px] gap-[40px]">
          <div className="w-[15%]">
            <StepOneSection />
          </div>
          <div className="w-[85%]">
            <StepTwoSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FomoPage;
