import Image from "next/image";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

type TokenListItemProps = {
  isSelected: boolean;
  onSelectToken: () => void;
  tokenName: string;
  tokenTicker: string;
  tokenAmount: number;
  tokenIcon: string;
};
const TokenListItem = ({
  onSelectToken,
  isSelected,
  tokenName,
  tokenTicker,
  tokenAmount,
  tokenIcon,
}: TokenListItemProps) => {
  return (
    <button
      onClick={onSelectToken}
      type="button"
      className={`flex justify-between items-center px-[20px] py-[10px] hover:bg-[#25405B] ${
        isSelected ? "opacity-[0.7]" : ""
      }`}
    >
      <div className="flex items-center gap-[10px]">
        <Image src={tokenIcon} width="45" height="45" alt="Eth Logo pump fun" />
        <span>
          <p className="text-neutral-0">{tokenName}</p>
          <p className="text-[#4A4A4AF5] text-left">{tokenTicker}</p>
        </span>
      </div>
      <span className="flex items-center gap-[10px]">
        <p className="text-neutral-0">{tokenAmount}</p>
        {isSelected && (
          <IoIosCheckmark
            strokeWidth="2"
            size={25}
            className="text-[#17435C]"
          />
        )}
      </span>
    </button>
  );
};

export default TokenListItem;
