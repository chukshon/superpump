import Image from "next/image";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

type TokenListItemProps = {
  isActive: boolean;
};
const TokenListItem = ({ isActive }: TokenListItemProps) => {
  return (
    <button
      type="button"
      className={`flex justify-between items-center px-[20px] py-[10px] hover:bg-[#25405B] ${
        isActive ? "opacity-[0.7]" : ""
      }`}
    >
      <div className="flex items-center gap-[10px]">
        <Image
          src="/icons/eth-logo.svg"
          width="45"
          height="45"
          alt="Eth Logo pump fun"
        />
        <span>
          <p className="text-neutral-0">Ethereum</p>
          <p className="text-[#4A4A4AF5] text-left">ETH</p>
        </span>
      </div>
      <span className="flex items-center gap-[10px]">
        <p className="text-neutral-0">3.2</p>
        {isActive && (
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
