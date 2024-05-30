import React from "react";
import { TokenT } from "@/types";

export interface TokenCardProps extends TokenT {
  index: number;
}
const TokenCardMobileView = (props: TokenCardProps) => {
  return <div className="flex lg:hidden">TokenCardMobileView</div>;
};

export default TokenCardMobileView;
