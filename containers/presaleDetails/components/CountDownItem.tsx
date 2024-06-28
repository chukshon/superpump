import React from "react";

const CountDownItem = ({ count }: { count: any }) => {
  return (
    <div className="bg-[#1B488B] grid place-items-center w-[25px] h-[25px] rounded-[4px] text-neutral-0">
      {count}
    </div>
  );
};

export default CountDownItem;
