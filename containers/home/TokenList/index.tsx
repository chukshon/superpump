import SelectVariantOne from "@/components/ui/SelectVariantOne";
import React from "react";

const TokenList = () => {
  return (
    <div className="w-[65%]">
      {/* Top Action Bar */}
      <div className="border-[1px] border-neutral-0 rounded-[10px] flex justify-between py-[10px] px-[10px]">
        <button>Create Token</button>
        <SelectVariantOne label="Sort:" />
      </div>

      {/* Token List */}
    </div>
  );
};

export default TokenList;
