import Image from "next/image";
import React from "react";

const TokenSelector = () => {
  return (
    <div className="border-[#172532] border-[1.5px] rounded-[8px] flex justify-between py-[10px] px-[10px]">
      {/* Left */}
      <div className="flex items-start gap-[10px] ">
        <Image
          src="/icons/wftm-logo.svg"
          width="32"
          height="32"
          alt="Eth Logo"
          className="z-30 cursor-pointer"
        />
        <span>
          <p className="text-neutral-0 text-[18px]">3.5</p>
          <p className="text-[#4A4A4A] text-[13px]">$5,375 USD</p>
        </span>
      </div>

      {/* Right */}
      <span>
        <p className="text-[#4A4A4A] text-[13px]">Balance: 6.9 Ftm</p>
      </span>
    </div>
  );
};

export default TokenSelector;
