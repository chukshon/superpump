import React from "react";
import ChartViewHeader from "./ChartViewHeader";
import TradeHistoryTable from "@/components/table/ChartTable/TradeHistoryTable";
import Tabs from "@/components/table/ChartTable/Tabs";

const ChartView = () => {
  return (
    <div className="px-[15px] z-30">
      <ChartViewHeader />

      {/* Chart */}
      <div className="bg-red-500 min-h-[600px] z-30"></div>

      {/* Table Tabs */}
      <div className="z-30 pt-[20px] px-[20px] bg-neutral-900 border-red-400 border-t-[1px] lg:border-l-[1px] lg:border-r-[1px]">
        <Tabs />
      </div>

      {/* Chart Table */}
      <div className="">
        <TradeHistoryTable />
      </div>
    </div>
  );
};

export default ChartView;
