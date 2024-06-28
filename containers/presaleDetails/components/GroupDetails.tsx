import React from "react";

type GroupDetailsProps = {
  label: string;
  value: string;
  responsive?: boolean;
};
const GroupDetails = ({
  label,
  value,
  responsive = false,
}: GroupDetailsProps) => {
  return (
    <div
      className={`flex ${
        responsive
          ? "flex-col md:flex-row md:justify-between md:items-center"
          : "flex-row justify-between items-center"
      }`}
    >
      <h3 className="text-[#47A7FF] font-[600]">{label}</h3>
      <p className="text-neutral-0 text-wrap break-words">{value}</p>
    </div>
  );
};

export default GroupDetails;
