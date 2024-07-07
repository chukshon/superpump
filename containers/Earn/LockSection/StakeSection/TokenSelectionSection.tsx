import React from "react";
import TokenSelectorVariantOne from "../../components/TokenSelectorVariantOne";
import InputTab from "../../components/InputTab";

const TokenSelectionSection = () => {
  return (
    <div>
      <h3 className="text-[#47A7FF] font-[600] text-[15px] mb-[10px]">
        Add token
      </h3>
      <TokenSelectorVariantOne />
      <ul className="flex justify-between w-full mt-[20px]">
        <InputTab value="25%" />
        <InputTab value="50%" />
        <InputTab value="75%" />
        <InputTab value="Max" />
      </ul>
    </div>
  );
};

export default TokenSelectionSection;
