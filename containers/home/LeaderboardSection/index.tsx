import React from "react";
import LeaderBoardItem from "./LeaderBoardItem";

const LeaderboardSection = () => {
  return (
    <div className="w-full lg:w-max">
      <h1 className="text-center text-[32px] font-[600] hidden lg:block">
        LeaderBoard
      </h1>
      <LeaderBoardItem />
    </div>
  );
};

export default LeaderboardSection;
