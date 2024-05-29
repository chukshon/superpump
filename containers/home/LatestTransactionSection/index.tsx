import React from "react";
import LatestTransactionItem from "./LatestTransactionItem";

const LatestTransactionSection = () => {
  return (
    <div className="w-[474px] h-[330px]">
      <h1 className="text-center text-[32px] font-[600]">
        Latest Transactions
      </h1>
      <LatestTransactionItem />
    </div>
  );
};

export default LatestTransactionSection;
