import InputTab from "@/containers/Earn/components/InputTab";
import React from "react";

type StakeInputFieldProps = {
  label: string;
};
const StakeInputField = ({ label }: StakeInputFieldProps) => {
  return (
    <div>
      {/* Label */}
      <p className="text-[#47A7FF] text-[16px] font-[500] mb-[5px]">{label}</p>
      {/* Token Selection */}
      <div className="border-variant-one bg-[rgba(0,0,0,0.24)] border-[1px] flex justify-between items-center rounded-[8px]  h-[55px] px-[20px]">
        {/* Token amount and usd equivalent */}
        <p className="text-neutral-0 text-[16px]">3.5</p>
        <p className="text-[#4A4A4A] text-[13px]">$5,375 USD</p>
      </div>

      {/* Percentage Input Tabs */}
      <ul className="flex justify-between mt-[10px]">
        <InputTab value="25%" />
        <InputTab value="50%" />
        <InputTab value="75%" />
        <InputTab value="Max" />
      </ul>
    </div>
  );
};

export default StakeInputField;
