"use client";
import React from "react";
import Tabs from "./Tabs";
import QuickPortfolioSection from "../QuickPortfolioSection";
import LatestTransactionSection from "../LatestTransactionSection";
import LeaderboardSection from "../LeaderboardSection";
import ChatSection from "../ChatSection";

const MainPageMobileView = () => {
  type tabsT = "superChat" | "portfolio" | "leaderboards" | "latestTx";
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
      label: "Leaderbords",
      value: "leaderboards",
    },
    {
      label: "latest Txs",
      value: "latestTx",
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState<tabsT | null>(
    "portfolio"
  );

  const renderTab = () => {
    switch (selectedTab) {
      case "superChat":
        return <ChatSection />;
      case "portfolio":
        return <QuickPortfolioSection />;
      case "leaderboards":
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
      <div className="max-w-[1000px] flex justify-center mt-[30px] mx-[30px]">
        {renderTab()}
      </div>
    </div>
  );
};

export default MainPageMobileView;
