import React from "react";
import { PiEyeBold } from "react-icons/pi";

const TopBar = () => {
  return (
    <div className="md:pl-[30px] border-b-[#828282] py-[10px] border-b-[1px]">
      <div className="container  flex items-center gap-[10px] justify-between lg:justify-start md:gap-[30px]">
        <span className="text-neutral-0 flex items-center gap-[10px]">
          <PiEyeBold strokeWidth={3} size={18} />
          <p>Watching</p>
        </span>
        <div className="flex gap-[10px] items-center">
          <span className="flex items-center gap-[10px]">
            <p className="text-[#003CFF]">Popee</p>
            <p className="text-[#4A4A4A]">$120K</p>
          </span>
          <span className="bg-[#4A4A4A] w-[2px] h-[20px]"></span>
          <span className="flex items-center gap-[10px]">
            <p className="text-[#003CFF]">Popee</p>
            <p className="text-[#4A4A4A]">$120K</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
