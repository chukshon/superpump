import Tab from "@/components/ui/Tab";
import React from "react";

const Tabs = () => {
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
  const handleTabClick = () => {};
  const selectedTab = "tradeHistory";

  return (
    <ul className="max-w-[700px] border-[1px] border-neutral-0 rounded-[5px] py-[5px] flex pl-[10px] items-center gap-[30px]">
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
