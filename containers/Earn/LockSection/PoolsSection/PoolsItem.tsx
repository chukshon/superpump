import Image from "next/image";
import React from "react";
import GroupItem from "./GroupItem";
import { FaAngleDoubleDown } from "react-icons/fa";

const PoolsItem = () => {
  return (
    <div className="bg-[#131A24] py-[20px] px-[20px]">
      {/* Toggle container */}
      <div className="flex justify-between">
        {/* Pair */}
        <span className="flex gap-[10px] items-center">
          <Image
            src={"/icons/pair-logo.svg"}
            width={50}
            height={50}
            alt="superpumpfun pool pair logo"
            className=""
          />
          <p className="text-neutral-0">ETH-FTM LP</p>
        </span>

        {/* Earned */}
        <GroupItem label="Earned" value="03" />

        {/* Apr */}
        <GroupItem label="Apr" value="Up to 799%" />

        {/* Staked Liquidity */}
        <GroupItem label="Staked Liquidity" value="$1,223,223" />

        {/* Multiplier */}
        <GroupItem label="Multiplier" value="23X" />

        {/* Available */}
        <GroupItem label="Available" value="23 LP" />

        {/* Staked */}
        <GroupItem label="Staked" value="0 LP" />

        <button type="button">
          <FaAngleDoubleDown className="text-[#47A7FF]" size={20} />
        </button>
      </div>
    </div>
  );
};

export default PoolsItem;
