import React from "react";
import TradeDetailsBox from "../TradeDetailsBox";
import ChartViewHeader from "../ChartView/ChartViewHeader";
import Tabs from "@/components/table/ChartTable/Tabs";
import TradeHistoryTable from "@/components/table/ChartTable/TradeHistoryTable";

const Mobile = () => {
  return (
    <div className="lg:hidden">
      <div className="mx-[20px] my-[20px]">
        <TradeDetailsBox />
      </div>
      <div>
        <ChartViewHeader />
      </div>
      {/* Chart */}
      <div className="bg-neutral-200 min-h-[600px]"></div>
      {/* Table Tabs */}
      <div className="pt-[20px] px-[10px] md:px-[20px] bg-neutral-900 border-red-400 border-t-[1px] lg:border-l-[1px] lg:border-r-[1px]">
        <Tabs />
      </div>

      {/* Chart Table */}
      <div className="">
        <TradeHistoryTable />
      </div>
    </div>
  );
};

export default Mobile;
