import React from "react";
import TradeDetailsBox from "../TradeDetailsBox";
import ChartViewHeader from "../ChartView/ChartViewHeader";
import Tabs from "@/components/table/ChartTable/Tabs";
import TradeHistoryTable from "@/components/table/ChartTable/TradeHistoryTable";
import TradeItem from "../TradeItem";
import FooterTab from "./FooterTab";

const Mobile = () => {
  const [showFloatingBar, setShowFloatingBar] = React.useState(false);
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

      {/* Floating Buy/sell panel */}
      <div className="fixed bottom-[0px] z-40 w-full">
        {/* Buy and sell Section */}
        <div className="border-[1px] rounded-tl-[10px] rounded-tr-[10px] border-red-500 px-[30px] bg-neutral-900 py-[30px]">
          <TradeItem />
        </div>

        {/* Footer */}
        <div className="border-t-[2px] border-red-500 bg-neutral-900 flex justify-between">
          <FooterTab title="Buy" />
          <FooterTab title="Sell" />
          <FooterTab title="Chat" />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
