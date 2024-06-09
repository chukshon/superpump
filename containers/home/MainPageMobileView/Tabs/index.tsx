import Tab from "@/components/ui/Tab";
import React from "react";

const Tabs = ({
  TabsData,
  selectedTab,
  handleTabClick,
}: {
  TabsData: { label: string; value: string }[];
  selectedTab: string;
  handleTabClick: (value: string) => void;
}) => {
  return (
    <ul className="flex justify-evenly gap-[20px] ">
      {TabsData.map((tab, index) => {
        return (
          <Tab
            handleTabClick={() => handleTabClick(tab.value)}
            tab={tab}
            isActive={selectedTab === tab.value}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
