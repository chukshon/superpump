import React from "react";

const TokenPriceDetailsBox = () => {
  return (
    <div className="border-[1px] rounded-[5px] border-one text-neutral-0 flex gap-[10px] px-[10px] items-center py-[5px]">
      <span className="flex flex-col xl:w-full">
        <p className="text-[12px] text-[#4A4A4A] font-chakra_Petch">Price</p>
        <span className="flex items-center gap-[4px]">
          <p className="font-chakra_Petch text-[24px] font-[700] leading-[25px]">
            $ 0.0005
          </p>
          <p className="text-[8px] text-[#0ECB81]">+1200%</p>
        </span>
      </span>
      <span className="bg-[#4A4A4A] w-[2px] h-[40px]"></span>
      <span className="flex flex-col xl:w-full">
        <p className="text-[12px] text-[#4A4A4A] font-chakra_Petch">
          MarketCap
        </p>
        <span className="flex items-center gap-[4px]">
          <p className="font-chakra_Petch text-[24px] font-[700] leading-[25px]">
            $ 0.0005
          </p>
          <p className="text-[8px] text-[#0ECB81]">+1200%</p>
        </span>
      </span>
    </div>
  );
};

export default TokenPriceDetailsBox;
