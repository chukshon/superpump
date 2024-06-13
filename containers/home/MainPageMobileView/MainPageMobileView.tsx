"use client";
import React from "react";
import Tabs from "./Tabs";
import QuickPortfolioSection from "../QuickPortfolioSection";
import LatestTransactionSection from "../LatestTransactionSection";
import LeaderboardSection from "../MarketUpdateSection";
import ChatSection from "../ChatSection";
import SearchInput from "./SearchInput";
import SelectVariantOne from "@/components/ui/SelectVariantOne";
import { TokenT } from "@/types";
import TokenCardMobileView from "../MainPageDesktopView/TokenList/TokenCard/TokenCardMobileView";

const MainPageMobileView = () => {
  type tabsT = "superChat" | "portfolio" | "marketUpdate" | "latestTx";
  const TabsData: { label: string; value: string }[] = [
    {
      label: "Super Chat",
      value: "superChat",
    },
    {
      label: "Portfolio",
      value: "portfolio",
    },
    {
      label: "Market Update",
      value: "marketUpdate",
    },
    {
      label: "latest Txs",
      value: "latestTx",
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState<tabsT | null>(
    "superChat"
  );

  const TokenList: TokenT[] = [
    {
      tokenName: "SUPERPUMP",
      tokenIcon: "/images/tokens/superpump-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$PUMP",
    },
    {
      tokenName: "BEACHPLS",
      tokenIcon: "/images/tokens/beach-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$BPLS",
    },
    {
      tokenName: "PEPEFLAG",
      tokenIcon: "/images/tokens/pepeflag-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$PFLAG",
    },
    {
      tokenName: "LAMBORANGE",
      tokenIcon: "/images/tokens/lamborange-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$LORA",
    },
  ];

  const renderTab = () => {
    switch (selectedTab) {
      case "superChat":
        return <ChatSection />;
      case "portfolio":
        return <QuickPortfolioSection />;
      case "marketUpdate":
        return <LeaderboardSection />;
      case "latestTx":
        return <LatestTransactionSection />;
    }
  };

  const handleTabClick = (value: string) => {
    setSelectedTab(value as tabsT);
  };
  return (
    <div className="block lg:hidden">
      {/* Tabs */}
      <div className="w-[100%] px-[10px] border-t-[1px] border-b-[1px] border-neutral-0 mt-[20px] py-[10px]">
        <Tabs
          handleTabClick={handleTabClick}
          TabsData={TabsData}
          selectedTab={selectedTab as string}
        />
      </div>

      {/* Create Token */}
      <div className="mt-[30px] flex justify-center">
        <button className="w-full mx-[20px] rounded-[4px] bg-custom-radial py-[8px] px-[20px border-[2px] border-neutral-0">
          Create Token
        </button>
      </div>

      {/* Selected Tab */}
      <div className=" flex justify-center mt-[30px] mx-[10px]">
        {renderTab()}
      </div>

      {/* Carousel */}
      <ul className="flex  gap-[30px] items-center mt-[30px] justify-center">
        {TabsData.map((tab, index) => {
          return (
            <li
              onClick={() => handleTabClick(tab.value)}
              key={tab.value}
              className={`h-[10px] w-[20px] ${
                tab.value === selectedTab ? "bg-[#003CFF]" : "bg-[#4A4A4A]"
              } rounded-[5px]`}
            ></li>
          );
        })}
      </ul>

      {/* Search */}
      <div className="mt-[40px] px-[10px]">
        <SearchInput />
      </div>

      {/* Select */}
      <div className="px-[10px] mt-[20px] ">
        <SelectVariantOne label="Sort:" />
      </div>

      {/* Token List */}
      <ul className="mt-[80px] flex justify-center flex-col items-center">
        {TokenList.map((token, index) => {
          return (
            <TokenCardMobileView
              key={token.tokenName}
              {...token}
              index={index}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MainPageMobileView;
