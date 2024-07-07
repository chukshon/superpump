"use client";

import React from "react";
import BuySection from "./BuySection";
import SellSection from "./SellSection";
import CustomTabOne from "@/components/ui/CustomTab/CustomTabOne";

const TradeSection = () => {
  const [activeTab, setActiveTab] = React.useState("Buy");
  return (
    <div className="">
      {/* Buy and sell Tab */}
      <ul className="flex">
        <CustomTabOne
          label="Buy"
          isActive={activeTab === "Buy"}
          onClick={() => {
            setActiveTab("Buy");
          }}
        />
        <CustomTabOne
          label="Sell"
          isActive={activeTab === "Sell"}
          onClick={() => {
            setActiveTab("Sell");
          }}
        />
      </ul>

      <div className="border-[1px] border-one rounded-bl-[5px] rounded-br-[5px] py-[20px] px-[10px]">
        {activeTab === "Buy" ? <BuySection /> : <SellSection />}
      </div>
    </div>
  );
};

export default TradeSection;
