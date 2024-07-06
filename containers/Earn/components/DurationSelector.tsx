import Image from "next/image";
import React from "react";

const DurationSelector = () => {
  return (
    <div className="border-[#172532] border-[1.5px] rounded-[8px] flex justify-between items-center h-[60px] px-[10px]">
      {/* Left */}
      <div className="flex items-center gap-[10px] ">
        <Image
          src="/icons/clock-logo.svg"
          width="32"
          height="32"
          alt="Eth Logo"
          className="z-30 cursor-pointer"
        />
        <p className="text-neutral-0 text-[18px]">32</p>
      </div>

      {/* Right */}
      <p className="text-[#4A4A4A] text-[13px]">Weeks(s)</p>
    </div>
  );
};

export default DurationSelector;
