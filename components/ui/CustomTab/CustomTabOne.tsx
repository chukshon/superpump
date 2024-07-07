import React from "react";

type CustomTabOne = {
  label: string;
  onClick: () => void;
  isActive: boolean;
};
const CustomTabOne = ({ label, onClick, isActive }: CustomTabOne) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-neutral-0 font-[700] flex items-center justify-center w-[50%] py-[10px] ${
        isActive
          ? "bg-linear-gradient border-one "
          : " bg-linear-gradient-inactive"
      } rounded-tl-[5px] rounded-tr-[5px]`}
    >
      {label}
    </button>
  );
};

export default CustomTabOne;
