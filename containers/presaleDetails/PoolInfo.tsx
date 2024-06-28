import React from "react";
import GroupDetails from "./components/GroupDetails";

const PoolInfo = () => {
  return (
    <div>
      <h1 className="text-neutral-0 text-[20px] font-[700] mb-[20px]">
        Pool Info
      </h1>
      <div className="flex flex-col gap-[10px] md:gap-[20px]">
        <GroupDetails
          label={"Address"}
          value={"aBcDeRhXDd6dvUyfQqMGq19EbrNzZHPRJk2kQqskcX78"}
          responsive
        />
        <p className="text-[#F6465D] text-[12px] lg:text-[14px]  lg:text-right">
          Do not send FTM to this token address!
        </p>
        <GroupDetails
          label={"Tokens for Presale"}
          value={"123,321,321"}
          responsive
        />
        <GroupDetails
          label={"Tokens for Liquidity"}
          value={"123,321,321"}
          responsive
        />
        <GroupDetails label={"SoftCap"} value={"1,000 FTM"} responsive />
        <GroupDetails
          label={"Start Time"}
          value={"2024.04.08 13:00 (UTC)"}
          responsive
        />
        <GroupDetails
          label={"End Time"}
          value={"2024.04.09 13:00 (UTC)"}
          responsive
        />
        <GroupDetails
          label={"Listing On"}
          value={"Raydium AMM V4"}
          responsive
        />
        <GroupDetails label={"Liquidity Percent"} value={"90%"} responsive />
        <GroupDetails
          label={"Liquidity Unlocked Time"}
          value={"2024.08.09 20:00 UTC (in about 2 months)"}
          responsive
        />
      </div>
    </div>
  );
};

export default PoolInfo;
