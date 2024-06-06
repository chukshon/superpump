import Image from "next/image";
import React from "react";

const PriceItem = () => {
  return (
    <div className="flex rounded-[10px] text-neutral-0 items-center gap-[5px] border-[1px] border-neutral-0 py-[3px] pl-[10px] w-[80px]">
      <Image
        src="/icons/ftm-logo-priceitem.svg"
        width={20}
        height={20}
        alt="ftm logo superpump fun trade"
        className="w-[14px] h-[16px]"
      />
      <p className="font-[700]">5</p>
    </div>
  );
};

export default PriceItem;
