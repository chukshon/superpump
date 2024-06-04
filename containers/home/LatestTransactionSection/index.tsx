import React from "react";
import LatestTransactionItem from "./LatestTransactionItem";

const LatestTransactionSection = () => {
  return (
    <div className="w-full lg:w-max">
      <h1 className="text-center text-[32px] font-[600] hidden lg:block">
        Latest Transactions
      </h1>

      <LatestTransactionItem />
    </div>
  );
};

export default LatestTransactionSection;
