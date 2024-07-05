import ChatSection from "@/containers/home/components/ChatSection";
import ChartView from "@/containers/tokenDetails/ChartView";
import TopBar from "@/containers/tokenDetails/TopBar";
import TokenPriceDetailsBox from "@/containers/tokenDetails/TokenPriceDetailsBox";
import TradeSection from "@/containers/tokenDetails/TradeSection";
import React from "react";

const Desktop = () => {
  return (
    <div className="hidden lg:block">
      <div className=" flex items-start mt-[30px] gap-[20px] container">
        {/* Chart Left Column */}
        <div className=" w-[70%] border-[1px] border-b-[0px] border-one pt-[15px] pb-[60px] rounded-[8px]">
          <ChartView />
        </div>

        {/* Token Actions Right Column */}
        <div className="w-[30%]  border-[1px] border-one px-[10px] py-[10px] rounded-[8px]">
          {/* Trade details */}
          <div className="mt-[10px]">
            <TokenPriceDetailsBox />
          </div>

          {/* Buy and sell Section */}
          <div className="my-[10px]">
            <TradeSection />
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
