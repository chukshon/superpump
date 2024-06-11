import ChatSection from "@/containers/home/ChatSection";
import ChartView from "@/containers/tokenDetails/ChartView";
import Desktop from "@/containers/tokenDetails/Desktop";
import Mobile from "@/containers/tokenDetails/Mobile";
import TopBar from "@/containers/tokenDetails/TopBar";
import TradeDetailsBox from "@/containers/tokenDetails/TradeDetailsBox";
import TradeItem from "@/containers/tokenDetails/TradeItem";

import React from "react";

const TokenDetails = () => {
  return (
    <div className="">
      {/* Top Bar */}
      <TopBar />
      {/* Large Screen */}
      <Desktop />
      {/* Mobile Screen */}
      <Mobile />
    </div>
  );
};

export default TokenDetails;
