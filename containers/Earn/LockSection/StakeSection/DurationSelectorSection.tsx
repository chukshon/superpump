import React from "react";
import DurationSelector from "../../components/DurationSelector";
import InputTab from "../../components/InputTab";

const DurationSelectorSection = () => {
  return (
    <div>
      <h3 className="text-[#47A7FF] font-[600] text-[15px] mb-[10px]">
        Add token
      </h3>
      <DurationSelector />
      <ul className="flex justify-between w-full mt-[20px]">
        <InputTab value="1W" />
        <InputTab value="1M" />
        <InputTab value="3M" />
        <InputTab value="6M" />
      </ul>
    </div>
  );
};

export default DurationSelectorSection;
