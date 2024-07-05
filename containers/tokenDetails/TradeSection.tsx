"use client";

import React from "react";
import PriceItem from "./PriceItem";
import Image from "next/image";
import BuySection from "./BuySection";
import SellSection from "./SellSection";

const TradeSection = () => {
  const [activeTab, setActiveTab] = React.useState("Buy");
  return (
    <div className="">
      {/* Buy and sell Tab */}
      <ul className="flex">
        <button
          type="button"
          onClick={() => {
            setActiveTab("Buy");
          }}
          className={`text-neutral-0 font-[700] flex items-center justify-center w-[50%] py-[10px] ${
            activeTab === "Buy"
              ? "bg-linear-gradient border-one "
              : " bg-linear-gradient-inactive"
          } rounded-tl-[5px] rounded-tr-[5px]`}
        >
          Buy
        </button>
        <button
          type="button"
          onClick={() => {
            setActiveTab("Sell");
          }}
          className={`text-neutral-150 font-[700] flex items-center justify-center w-[50%] py-[10px] 
          rounded-tr-[5px] ${
            activeTab === "Sell"
              ? "bg-linear-gradient  border-one"
              : "bg-linear-gradient-inactive"
          } `}
        >
          Sell
        </button>
      </ul>

      <div className="border-[1px] border-one rounded-bl-[5px] rounded-br-[5px] py-[20px] px-[10px]">
        {activeTab === "Buy" ? <BuySection /> : <SellSection />}
      </div>
    </div>
  );
};

export default TradeSection;
