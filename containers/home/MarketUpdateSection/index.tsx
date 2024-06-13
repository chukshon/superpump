import React from "react";
import MarketUpdateItem from "./MarketUpdateItem";

const MarketUpdateSection = () => {
  return (
    <div className="w-full lg:w-max">
      <h1 className="text-center text-[32px] font-[600] hidden lg:block">
        MarketUpdateItem
      </h1>
      <MarketUpdateItem />
    </div>
  );
};

export default MarketUpdateSection;
