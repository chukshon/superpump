import Image from "next/image";
import React from "react";

const SuggestedTokenItem = () => {
  return (
    <button
      type="button"
      className="flex gap-[10px] items-center rounded-[20px] py-[5px] px-[10px] border-[#18232C] border-[1.5px] w-[max-content]"
    >
      <Image
        src="/icons/eth-logo.svg"
        width="25"
        height="25"
        alt="Eth Logo pump fun"
      />
      <p className="text-neutral-0 text-[17px]">ETH</p>
    </button>
  );
};

export default SuggestedTokenItem;
