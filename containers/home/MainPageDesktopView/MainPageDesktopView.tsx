import React from "react";
import QuickPortfolioSection from "../QuickPortfolioSection";
import LeaderboardSection from "../LeaderboardSection";
import LatestTransactionSection from "../LatestTransactionSection";
import TokenList from "../TokenList";
import ChatSection from "../ChatSection";

const MainPageDesktopView = () => {
  return (
    <div className="hidden lg:block px-[10px] mt-[20px]">
      <div className="mb-[70px] flex flex-row items-center gap-y-[100px] gap-x-[20px] justify-center w-[100%] flex-wrap">
        {/* Top Summary Section */}
        <QuickPortfolioSection />
        <LeaderboardSection />
        <LatestTransactionSection />
      </div>

      <div className="pl-[20px] flex items-start gap-[20px]  w-[100%]">
        {/* Token List Section */}
        <div className="w-[70%]">
          <TokenList />
        </div>

        {/* Chat Section */}
        <div className="w-[30%]">
          <ChatSection />
        </div>
      </div>
    </div>
  );
};

export default MainPageDesktopView;
