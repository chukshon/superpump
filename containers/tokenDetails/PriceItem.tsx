import Image from "next/image";
import React from "react";

type PriceItemProps = {
  amount: number;
  hasIcon: boolean;
  icon: string;
};
const PriceItem = ({ amount, hasIcon, icon }: PriceItemProps) => {
  return (
    <button
      type="button"
      className="flex rounded-[10px] text-neutral-0 items-center gap-[5px] border-[1.5px] border-[#172532] py-[3px] pl-[10px] w-[80px]"
    >
      {hasIcon && (
        <Image
          src={icon}
          width={20}
          height={20}
          alt="ftm logo superpump fun trade"
          className="w-[14px] h-[16px]"
        />
      )}

      <p className="font-[700]">{amount}</p>
    </button>
  );
};

export default PriceItem;
