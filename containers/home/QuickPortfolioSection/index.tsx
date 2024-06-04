import React from "react";
import QuickPortfolioCard from "./QuickPortfolioCard";

const QuickPortfolioSection = () => {
  return (
    <div className="w-full lg:w-max">
      <h1 className="text-center text-[32px] font-[600] hidden lg:inline-block">
        Quick Portfolio
      </h1>

      <QuickPortfolioCard />
    </div>
  );
};

export default QuickPortfolioSection;
