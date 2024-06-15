"use client";

import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
import useMarketUpdate from "./useMarketUpdate";

const MarketUpdateItem = () => {
  const {
    QuickPortfolioTablecolumns,
    QuickPortfolioTableData,
    TabData,
    color,
    handleSwitchTab,
    selectedTab,
  } = useMarketUpdate();

  type MarketUpdateT = "gainers" | "losers";

  return (
    <UnionBorderContainer>
      {/* Tab */}
      <ul className="bg-neutral-900 border-[1px] border-[#797A7C] rounded-[5px] px-[10px] flex gap-[10px] py-[10px]">
        {TabData.map((tab, index) => {
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleSwitchTab(tab.value as MarketUpdateT)}
              className={`${
                tab.value === selectedTab && `bg-[${color}]`
              }   py-[7px] flex items-center justify-center rounded-[5px] w-[50%] border-[1px] border-[#797A7C]`}
            >
              <p>{tab.label}</p>
            </button>
          );
        })}
      </ul>
      {/* Table */}
      <div className="mt-[10px]">
        <DefaultTable
          columns={QuickPortfolioTablecolumns}
          data={QuickPortfolioTableData}
        />
      </div>
    </UnionBorderContainer>
  );
};

export default MarketUpdateItem;
