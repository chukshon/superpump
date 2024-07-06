import React from "react";

type GroupDetailsProps = {
  title: string;
  desc: string;
};
const GroupDetails = ({ title, desc }: GroupDetailsProps) => {
  return (
    <div>
      <p className="text-[15px] text-right text-[#47A7FF]">{title}</p>
      <h4 className="text-right text-neutral-0 font-[600] text-[20px]">
        {desc}
      </h4>
    </div>
  );
};

export default GroupDetails;
