import Image from "next/image";
import React from "react";

type SuggestedTokenItemProps = {
  tokenTicker: string;
  tokenIcon: string;
  onSelectToken: () => void;
};
const SuggestedTokenItem = ({
  tokenTicker,
  tokenIcon,
  onSelectToken,
}: SuggestedTokenItemProps) => {
  return (
    <button
      onClick={onSelectToken}
      type="button"
      className="flex gap-[10px] items-center rounded-[20px] py-[5px] px-[10px] border-[#18232C] border-[1.5px] w-[max-content]"
    >
      <Image src={tokenIcon} width="25" height="25" alt="Eth Logo pump fun" />
      <p className="text-neutral-0 text-[17px]">{tokenTicker}</p>
    </button>
  );
};

export default SuggestedTokenItem;
