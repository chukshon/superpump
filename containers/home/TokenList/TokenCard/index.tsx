import React from "react";
import TokenCardDesktopView from "./TokenCardDesktopView";
import TokenCardMobileView from "./TokenCardMobileView";
import { TokenT } from "@/types";

export interface TokenCardProps extends TokenT {
  index: number;
}

const TokenCard = (props: TokenCardProps) => {
  return (
    <>
      <TokenCardDesktopView {...props} />
      <TokenCardMobileView {...props} />
    </>
  );
};

export default TokenCard;
