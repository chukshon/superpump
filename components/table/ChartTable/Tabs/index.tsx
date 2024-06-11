"use client";

import Tab from "@/components/ui/Tab";
import React from "react";

const Tabs = () => {
  type tabsT = "tradeHistory" | "holders" | "myPositions" | "topTraders";
  const TabsData = [
    {
      label: "Trade History",
      value: "tradeHistory",
    },
    {
      label: "Holders[9999]",
      value: "holders",
    },
    {
      label: "My Positions",
      value: "myPositions",
    },
    {
      label: "Top Traders",
      value: "topTraders",
    },
  ];
  const handleTabClick = (value: string) => {
    setSelectedTab(value as tabsT);
  };
  const [selectedTab, setSelectedTab] = React.useState<tabsT | null>(
    "tradeHistory"
  );

  return (
    <ul className="max-w-[700px] border-[1px] border-neutral-0 rounded-[5px] py-[5px] flex px-[10px] md:px-[20px] items-center gap-[10px] md:gap-[30px]">
      {TabsData.map((tab, index) => {
        return (
          <Tab
            key={tab.value}
            handleTabClick={handleTabClick}
            isActive={selectedTab === tab.value}
            tab={tab}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
