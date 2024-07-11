import Image from "next/image";
import React from "react";
import InputTab from "./InputTab";

type DurationSelectorProps = {
  label: string;
};
const DurationSelector = ({ label }: DurationSelectorProps) => {
  return (
    <div>
      <h3 className="text-[#47A7FF] font-[600] text-[15px] mb-[10px]">
        {label}
      </h3>
      <div className="border-variant-one bg-[rgba(0,0,0,0.24)] rounded-[8px] flex justify-between items-center h-[55px] px-[10px]">
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
      <ul className="flex justify-between w-full mt-[10px]">
        <InputTab value="1W" />
        <InputTab value="1M" />
        <InputTab value="3M" />
        <InputTab value="6M" />
      </ul>
    </div>
  );
};

export default DurationSelector;
