import React from "react";

type FooterTabProps = {
  title: string;
  handleClick: () => void;
};

const FooterTab = ({ title, handleClick }: FooterTabProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-blue-700 flex items-center justify-center flex-col w-[max-content] px-[20px] py-[10px]"
    >
      <span className="bg-red-500 w-[15px] h-[5px]"></span>
      <p className="text-neutral-0">{title}</p>
    </button>
  );
};

export default FooterTab;
