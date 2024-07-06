import React from "react";
import PresalePieChart from "./components/PresalePieChart";
import TokenomicsTable from "@/components/table/TokenomicsTable/TokenomicsTable";

const Tokenomics = () => {
  return (
    <div>
      <h1 className="text-neutral-0 text-[20px] font-[700] mb-[20px]">
        Tokenomics
      </h1>
      {/* Chart */}
      <div className="w-full h-[400px] flex items-center justify-center">
        <PresalePieChart />
      </div>
      {/* Table */}
      <div>
        <TokenomicsTable />
      </div>
    </div>
  );
};

export default Tokenomics;
