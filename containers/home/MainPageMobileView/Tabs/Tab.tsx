import React from "react";

type TabProps = {
  tab: { label: string; value: string };
  selectedTab: string;
  handleTabClick: (value: string) => void;
};

const Tab = ({ tab, selectedTab, handleTabClick }: TabProps) => {
  const isActive = selectedTab === tab.value;
  return (
    <div
      onClick={() => handleTabClick(tab.value)}
      className={`${
        isActive ? "bg-custom-radial2 py-[2px] px-[6px]" : "py-[2px] px-[6px]"
      }`}
    >
      <p className="text-[11px]">{tab.label}</p>
    </div>
  );
};

export default Tab;
