import React from "react";
import PresalePieChart from "./components/PresalePieChart";

const Tokenomics = () => {
  return (
    <div>
      <h1 className="text-neutral-0 text-[20px] font-[700] mb-[20px]">
        Tokenomics
      </h1>
      <div className="w-full h-[300px] flex items-center justify-center">
        <PresalePieChart />
      </div>
    </div>
  );
};

export default Tokenomics;
