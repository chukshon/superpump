import React from "react";

type TabProps = {
  tab: { label: string; value: string };
  isActive: boolean;
  handleTabClick: (value: string) => void;
};

const Tab = ({ tab, handleTabClick, isActive }: TabProps) => {
  return (
    <div
      onClick={() => handleTabClick(tab.value)}
      className={`${
        isActive
          ? "text-neutral-0 bg-custom-radial2 py-[2px] px-[6px]"
          : " py-[2px] px-[6px] text-neutral-0"
      }`}
    >
      <p className="text-[13px]">{tab.label}</p>
    </div>
  );
};

export default Tab;
