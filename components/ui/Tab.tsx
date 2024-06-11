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
          ? "text-neutral-0 bg-custom-radial2 py-[2px] px-[10px] w-[max-content] "
          : " py-[2px] px-[10px] text-neutral-0"
      } flex items-center z-30`}
    >
      <p className="text-[12px] md:text-[13px] text-center">{tab.label}</p>
    </div>
  );
};

export default Tab;
