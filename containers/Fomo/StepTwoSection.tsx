import React from "react";

const StepTwoSection = () => {
  return (
    <div className="w-full md:w-[85%]">
      <div className="bg-[#0D0D0D] rounded-[4px] border-[1px] border-[#1C395F] lg:h-[250px] flex lg:justify-center lg:items-center gap-[30px] flex-col lg:flex-row px-[20px] lg:px-[0px] py-[10px] lg:py-[10px]">
        <div>
          <p className="text-left text-neutral-0 text-[18px]">Step 2</p>
          <h3 className="text-[25px] text-neutral-0 font-[700]">Buy Tickets</h3>
        </div>
        <div className="border-l-[#11171E] border-l-[1.5px] lg:pl-[30px] flex flex-col">
          <p className="text-[20px] font-[600] text-neutral-0">fFTM Amount:</p>
          <div className="my-[5px] bg-[#1B488B] lg:w-[300px] flex justify-between items-center px-[15px] py-[5px]">
            <p className="text-neutral-0 text-[13px]">1,223.08</p>
            <button type="button" className="text-[#47A7FF]">
              Max
            </button>
          </div>
          <span className="flex justify-end text-[#4A4A4A] text-[15px] mb-[30px]">
            <p>1 fFTM = 10 Tickets</p>
          </span>
          <div className="justify-end flex">
            <button
              type="button"
              className="bg-custom-radial text-neutral-0 px-[15px] py-[5px] rounded-[4px]"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwoSection;
