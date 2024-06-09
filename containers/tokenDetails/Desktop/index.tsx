import ChatSection from "@/containers/home/ChatSection";
import ChartView from "@/containers/tokenDetails/ChartView";
import TopBar from "@/containers/tokenDetails/TopBar";
import TradeDetailsBox from "@/containers/tokenDetails/TradeDetailsBox";
import TradeItem from "@/containers/tokenDetails/TradeItem";
import React from "react";

const Desktop = () => {
  return (
    <div className="hidden lg:block">
      {/* Top Bar */}
      <TopBar />

      <div className=" flex items-start mt-[30px] gap-[20px] container">
        {/* Chart Left Col */}
        <div className="w-[70%] border-[1px] border-neutral-0">
          <ChartView />
        </div>

        {/* Token Actions Right Col */}
        <div className="w-[30%]  border-[1px] border-neutral-0 px-[10px] py-[10px] rounded-[8px]">
          {/* Trade details */}
          <div className="mt-[10px]">
            <TradeDetailsBox />
          </div>

          {/* Buy and sell Section */}
          <div className="my-[10px]">
            <TradeItem />
          </div>

          {/* Chat Section */}
          <div>
            <ChatSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
