import React from "react";
import TokenCardDesktopView from "./TokenCardDesktopView";
import TokenCardMobileView from "./TokenCardMobileView";

type TokenCardProps = {
  tokenName: string;
  tokenIcon: string;
  marketCap: string;
  creatorAddress: string;
  tokenDescription: string;
};
const TokenCard = ({
  tokenName,
  tokenIcon,
  marketCap,
  creatorAddress,
  tokenDescription,
}: TokenCardProps) => {
  return (
    <div>
      <TokenCardDesktopView />
      <TokenCardMobileView />
    </div>
  );
};

export default TokenCard;
