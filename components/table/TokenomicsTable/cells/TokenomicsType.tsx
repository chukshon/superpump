import React from "react";

type TokenomicsTypeProps = {
  type: string;
};
const TokenomicsType = ({ type }: TokenomicsTypeProps) => {
  let color = "";

  switch (type) {
    case "Presale":
      color = "bg-[#7F00FF]";
      break;
    case "Liquidity":
      color = "bg-[#FFC700]";
      break;
    case "Ecosystem":
      color = "bg-[#BDF4D3]";
      break;
    case "Cex Listing/Marketing":
      color = "bg-[#0094FF]";
      break;
    default:
      color = "bg-red-100";
  }
  return (
    <div className="flex items-center gap-[10px]">
      <div className={` w-[20px] h-[20px] rounded-full ${color}`}></div>
      <p className="text-[12px] uppercase text-neutral-0">{type}</p>
    </div>
  );
};

export default TokenomicsType;
