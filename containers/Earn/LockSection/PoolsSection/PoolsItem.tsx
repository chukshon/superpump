"use client";
import Image from "next/image";
import React from "react";
import GroupItem from "./GroupItem";
import { FaAngleDoubleDown } from "react-icons/fa";
import LiquiditySection from "./PoolsTabs/LiquiditySection";
import CustomTabOne from "@/components/ui/CustomTab/CustomTabOne";
import SponsorshipSection from "./PoolsTabs/SponsorshipSection";
import VoteSection from "./PoolsTabs/VoteSection";

const PoolsItem = () => {
  const [selectedTab, setSelectedTab] = React.useState("Liquidity");
  return (
    <div className="">
      {/* Toggle container */}
      <div className="flex justify-between bg-[#131A24] py-[15px] px-[20px]">
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

      {/* Collapsible Container */}
      <div className="bg-[#0F1621] px-[20px] pt-[20px] pb-[30px]">
        {/* Tabs Section*/}
        <div>
          <ul className="flex max-w-[600px]">
            <CustomTabOne
              label="Liquidity"
              onClick={() => setSelectedTab("Liquidity")}
              isActive={selectedTab === "Liquidity"}
            />
            <CustomTabOne
              label="Sponsorship"
              onClick={() => setSelectedTab("Sponsorship")}
              isActive={selectedTab === "Sponsorship"}
            />
            <CustomTabOne
              label="Vote"
              onClick={() => setSelectedTab("Vote")}
              isActive={selectedTab === "Vote"}
            />
          </ul>

          {/* Selected Tab Container */}
          <div>
            {selectedTab === "Liquidity" && <LiquiditySection />}
            {selectedTab === "Sponsorship" && <SponsorshipSection />}
            {selectedTab === "Vote" && <VoteSection />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolsItem;
