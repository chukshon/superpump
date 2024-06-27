import React from "react";

type PresaleStatusProps = {
  status: string;
};

const PresaleStatus = ({ status }: PresaleStatusProps) => {
  return (
    <div className="border-[1px] items-center gap-[10px] border-neutral-0 bg-neutral-100 flex rounded-[20px] px-[20px] py-[5px] justify-between">
      <div className={`h-[20px] w-[20px] rounded-full bg-[#FFC700]`}></div>
      <p className={`text-[#FFC700]`}>{status}</p>
    </div>
  );
};

export default PresaleStatus;
