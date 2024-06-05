import React from "react";
import QuickPortfolioSection from "../QuickPortfolioSection";
import LeaderboardSection from "../LeaderboardSection";
import LatestTransactionSection from "../LatestTransactionSection";
import TokenList from "../TokenList";
import ChatSection from "../ChatSection";

const MainPageDesktopView = () => {
  return (
    <div className="hidden lg:block px-[10px] mt-[20px]">
      <div className="mb-[70px] container flex justify-evenly lg:items-start gap-y-[40px]  w-[100%] flex-wrap">
        {/* Top Summary Section */}
        <QuickPortfolioSection />
        <LeaderboardSection />
        <LatestTransactionSection />
      </div>

      <div className="pl-[20px] container flex items-start gap-[20px]  w-[100%]">
        {/* Token List Section */}
        <div className="w-[70%]">
          <TokenList />
        </div>

        {/* Chat Section */}
        <div className="w-[30%] hidden lg:block">
          <ChatSection />
        </div>
      </div>
    </div>
  );
};

export default MainPageDesktopView;
