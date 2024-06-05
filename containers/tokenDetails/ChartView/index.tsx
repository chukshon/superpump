import React from "react";
import ChartViewHeader from "./ChartViewHeader";

const ChartView = () => {
  return (
    <div className="px-[15px]">
      <ChartViewHeader />

      {/* Chart */}
      <div className="bg-neutral-200 min-h-[600px]"></div>
    </div>
  );
};

export default ChartView;
