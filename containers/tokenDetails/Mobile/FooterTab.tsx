import React from "react";

type FooterTabProps = {
  title: string;
};

const FooterTab = ({ title }: FooterTabProps) => {
  return (
    <div className="bg-blue-700 flex items-center justify-center flex-col w-[max-content] px-[20px] py-[10px]">
      <span className="bg-red-500 w-[15px] h-[5px]"></span>
      <p className="text-neutral-0">{title}</p>
    </div>
  );
};

export default FooterTab;
