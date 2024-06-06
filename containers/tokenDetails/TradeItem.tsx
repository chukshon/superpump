import React from "react";
import PriceItem from "./PriceItem";
import Image from "next/image";
import BuySection from "./BuySection";

const TradeItem = () => {
  return (
    <div>
      {/* Buy and sell Tab */}
      <ul className="flex">
        <li className="flex items-center justify-center w-[50%] py-[10px] bg-red-500 rounded-tl-[5px] rounded-tr-[5px]">
          Buy
        </li>
        <li className="flex items-center justify-center w-[50%] py-[10px] bg-blue-500 rounded-tl-[5px] rounded-tr-[5px]">
          Sell
        </li>
      </ul>

      <div className="border-[1px] border-neutral-0 rounded-bl-[5px] rounded-br-[5px] py-[20px] px-[30px]">
        <BuySection />
      </div>
    </div>
  );
};

export default TradeItem;
