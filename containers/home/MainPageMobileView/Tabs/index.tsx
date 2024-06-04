import React from "react";
import Tab from "./Tab";

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
            selectedTab={selectedTab}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
