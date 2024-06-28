import React from "react";
import GroupDetails from "./components/GroupDetails";
import Divider from "@/components/ui/Divider";

const ContributorsInfo = () => {
  return (
    <div>
      <h1 className="text-neutral-0 text-[20px] font-[700] mb-[20px]">
        Contributors Info
      </h1>
      <div className="flex flex-col gap-[10px] md:gap-[20px]">
        <GroupDetails label={"Total Unique Contributors"} value={"950"} />
        <GroupDetails label={"Total Balance of Contributors"} value={"$3M"} />
        <GroupDetails label={"Total Swap Transactions"} value={"25.5K"} />
        <GroupDetails label={"Fresh Wallets"} value={"3/950 (0.003%)"} />
        <GroupDetails
          label={"Contributors Lifetime Avg."}
          value={"1 Month(s)"}
        />
      </div>
      <div className="grid place-items-center mt-[10px]">
        <button
          type="button"
          className="rounded-[4px] text-neutral-0 border-[2px] border-[#003CFF] py-[10px] w-full text-center"
        >
          View Details
        </button>
      </div>
      <Divider className="bg-[#47A7FF] my-[20px]" />
    </div>
  );
};

export default ContributorsInfo;
