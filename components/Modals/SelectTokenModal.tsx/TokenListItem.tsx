import Image from "next/image";
import React from "react";
import { IoIosCheckmark } from "react-icons/io";

const TokenListItem = () => {
  return (
    <div>
      <div className="flex items-center gap-[10px]">
        <Image
          src="/icons/eth-logo.svg"
          width="45"
          height="45"
          alt="Eth Logo pump fun"
        />
        <span>
          <p>Ethereum</p>
          <p>ETH</p>
        </span>
      </div>
      <span className="flex items-center gap-[10px]">
        <p className="text-neutral-0">3.2</p>
        <IoIosCheckmark className="text-[#17435C]" />
      </span>
    </div>
  );
};

export default TokenListItem;
