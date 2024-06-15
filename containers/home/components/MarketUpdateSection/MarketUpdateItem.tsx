"use client";

import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";

import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { HiChevronUpDown } from "react-icons/hi2";
import useMarketUpdate from "./useMarketUpdate";

const MarketUpdateItem = () => {
  const { QuickPortfolioTablecolumns, QuickPortfolioTableData } =
    useMarketUpdate();
  type MarketUpdateT = "gainers" | "losers";

  const TabData = [
    {
      label: "Gainers",
      value: "gainers",
    },
    {
      label: "Losers",
      value: "losers",
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState("gainers");

  const handleSwitchTab = (tab: MarketUpdateT) => {
    setSelectedTab(tab);
  };

  let bgColor = "";

  switch (selectedTab) {
    case "gainers":
      bgColor = "bg-[#0ECB81]";
      break;
    case "losers":
      bgColor = "bg-[#F6465D]";
      break;
  }

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
                tab.value === selectedTab && bgColor
              }   py-[7px] flex items-center justify-center rounded-[5px] w-[50%] border-[1px] border-[#797A7C]`}
            >
              <p>{tab.label}</p>
            </button>
          );
        })}
      </ul>
      {/* Table */}
      <DefaultTable
        columns={QuickPortfolioTablecolumns}
        data={QuickPortfolioTableData}
      />
    </UnionBorderContainer>
  );
};

export default MarketUpdateItem;
