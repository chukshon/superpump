import React from "react";

type GroupItemProps = {
  label: string;
  value: string;
  className?: string;
};
const GroupItem = ({ label, value, className }: GroupItemProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <p className="text-neutral-0">{label}</p>
      <p className="text-[#47A7FF] ">{value}</p>
    </div>
  );
};

export default GroupItem;
