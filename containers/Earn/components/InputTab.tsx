import React from "react";

const InputTab = ({ value }: { value: string }) => {
  return (
    <button className="rounded-[4px] text-neutral-0 border-[1px] border-[#112545] bg-[rgba(0,0,0,0.24)] px-[20px] py-[1px]">
      {value}
    </button>
  );
};

export default InputTab;
