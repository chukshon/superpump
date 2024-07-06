import React from "react";

const InputTab = ({ value }: { value: string }) => {
  return (
    <button className="border-[rgba(71,167,255,0.24] bg-[rgba(0,0,0,0.24)] px-[20px] py-[10px]">
      {value}
    </button>
  );
};

export default InputTab;
