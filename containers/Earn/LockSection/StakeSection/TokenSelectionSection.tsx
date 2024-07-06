import React from "react";
import TokenSelector from "../../components/TokenSelector";

const TokenSelectionSection = () => {
  return (
    <div>
      <h3 className="text-[#47A7FF] font-[600] text-[15px] mb-[10px]">
        Add token
      </h3>
      <TokenSelector />
    </div>
  );
};

export default TokenSelectionSection;
