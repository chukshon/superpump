import React from "react";
import LeaderBoardItem from "./LeaderBoardItem";

const LeaderboardSection = () => {
  return (
    <div className="w-[474px] h-[330px]">
      <h1 className="text-center text-[32px] font-[600]">LeaderBoard</h1>
      <LeaderBoardItem />
    </div>
  );
};

export default LeaderboardSection;
