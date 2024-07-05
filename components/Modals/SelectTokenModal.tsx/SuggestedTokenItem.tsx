import Image from "next/image";
import React from "react";

const SuggestedTokenItem = () => {
  return (
    <div className="flex items-center rounded-[16px] py-[5px] px-[10px] border-[#18232C]">
      <Image
        src="/icons/eth-logo.svg"
        width="16"
        height="16"
        alt="Eth Logo pump fun"
      />
      <p>ETH</p>
    </div>
  );
};

export default SuggestedTokenItem;
