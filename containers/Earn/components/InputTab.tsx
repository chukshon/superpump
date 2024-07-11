import React from "react";

const InputTab = ({ value }: { value: string }) => {
  return (
    <button className="text-[13px] rounded-[4px] text-neutral-0 border-[1px] border-[rgba(71,167,255,0.24)] bg-[rgba(0,0,0,0.24)] px-[20px] py-[1px]">
      {value}
    </button>
  );
};

export default InputTab;
