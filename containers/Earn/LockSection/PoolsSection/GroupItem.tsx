import React from "react";

type GroupItemProps = {
  label: string;
  value: string;
};
const GroupItem = ({ label, value }: GroupItemProps) => {
  return (
    <div className="flex flex-col">
      <p className="text-neutral-0">{label}</p>
      <p className="text-[#47A7FF] ">{value}</p>
    </div>
  );
};

export default GroupItem;
