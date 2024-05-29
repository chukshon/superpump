import React from "react";
import QuickPortfolioSection from "../QuickPortfolioSection";
import LeaderboardSection from "../LeaderboardSection";

const MainPageDesktopView = () => {
  return (
    <div className="hidden lg:flex flex-col lg:flex-row px-[10px] mt-[50px] mb-[100px]  items-center gap-[20px] justify-center w-[100%]">
      <QuickPortfolioSection />
      <LeaderboardSection />
      <QuickPortfolioSection />
    </div>
  );
};

export default MainPageDesktopView;
