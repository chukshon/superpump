import React from "react";

type FooterTabProps = {
  title: string;
  handleClick: () => void;
  isActive: boolean;
};

const FooterTab = ({ title, handleClick, isActive }: FooterTabProps) => {
  let color = "";

  switch (title) {
    case "Buy":
      color = "bg-[#0ECB81]";
      break;
    case "Sell":
      color = "bg-[#EC1966]";
      break;
    case "Chat":
      color = "bg-[#003CFF]";
      break;
    default:
      color = "bg-red-100";
  }

  return (
    <button
      onClick={handleClick}
      className={`${
        isActive ? "bg-linear-gradient" : ""
      } flex items-center justify-center flex-col w-[max-content] px-[30px] py-[15px]`}
    >
      <span className={`${color} w-[15px] h-[5px]`}></span>
      <p className="text-neutral-0">{title}</p>
    </button>
  );
};

export default FooterTab;
