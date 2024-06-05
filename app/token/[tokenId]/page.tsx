import ChartView from "@/containers/tokenDetails/ChartView";
import TopBar from "@/containers/tokenDetails/TopBar";
import React from "react";

const TokenDetails = () => {
  return (
    <div className="container">
      {/* Top Bar */}
      <TopBar />

      <div className=" flex items-start mt-[30px] gap-[20px]">
        {/* Left Col */}
        <div className="w-[70%] h-[1000px] border-[1px] border-neutral-0">
          <ChartView />
        </div>

        {/* Right Col */}
        <div className="w-[30%]  h-[1000px] bg-blue-400">Right</div>
      </div>
    </div>
  );
};

export default TokenDetails;
