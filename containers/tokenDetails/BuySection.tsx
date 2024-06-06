import React from "react";
import PriceItem from "./PriceItem";
import Image from "next/image";

const BuySection = () => {
  return (
    <div>
      {/* Fixed Price List */}
      <ul>
        <PriceItem />
      </ul>

      {/* Price Input */}
      <div className="mt-[10px]">
        <div className="border-[1px] border-neutral-150 flex gap-[4px] items-center pl-[10px] py-[10px] rounded-[10px]">
          <Image
            src="/icons/ftm-logo-priceitem.svg"
            width={20}
            height={20}
            alt="ftm logo superpump fun trade"
            className="w-[14px] h-[16px]"
          />
          <input
            placeholder="Enter amount in FTM"
            className="w-[70%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4ACC] text-neutral-50 "
          />
        </div>
      </div>

      {/* Advanced Settings */}
      <button
        type="button"
        className="text-[#4A4A4A] font-chakra_Petch text-[13px] w-full py-[10px]"
      >
        <p className="text-right">Advanced Settings</p>
      </button>

      {/* Quick Buy/Sell */}
      <button
        type="button"
        className="bg-green-600 w-full text-center py-[10px]"
      >
        Quick Buy
      </button>

      <p className="text-[#4A4A4A] text-[12px] mt-[10px]">
        By clicking “Quick Buy”, you agree to have your transaction immediately
        sent.
      </p>
    </div>
  );
};

export default BuySection;
