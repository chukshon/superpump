import React from "react";
import PriceItem from "./PriceItem";
import Image from "next/image";
import BuySection from "./BuySection";

const TradeItem = () => {
  const isActive = false;
  return (
    <div className="">
      {/* Buy and sell Tab */}
      <ul className="flex">
        <li className="border-one text-neutral-0 font-[700] flex items-center justify-center w-[50%] py-[10px] bg-linear-gradient  rounded-tl-[5px] rounded-tr-[5px]">
          <button>Buy</button>
        </li>
        <li className="text-neutral-150 font-[700] flex items-center justify-center w-[50%] py-[10px] bg-linear-gradient-inactive rounded-tr-[5px]">
          <button>Sell</button>
        </li>
      </ul>

      <div className="border-[1px] border-one rounded-bl-[5px] rounded-br-[5px] py-[20px] px-[10px]">
        <BuySection />
      </div>
    </div>
  );
};

export default TradeItem;
