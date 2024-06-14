import { Search } from "lucide-react";
import Image from "next/image";
import React from "react";

const MobileSearchInput = () => {
  return (
    <div className="rounded-[10px] relative border-[1px] py-[15px] px-[10px] w-[100%] flex items-center gap-[10px]">
      <input
        placeholder="Search for token name or contr. . ."
        className="w-[95%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4ACC] text-neutral-50 active:bg-[transparent] "
      />
      <button className="z-30 rounded-[4px] w-max bg-custom-radial py-[3px] px-[20px]">
        <Search size={23} />
      </button>
    </div>
  );
};

export default MobileSearchInput;
