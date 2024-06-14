import React from "react";
import { TokenT } from "@/types";
import Image from "next/image";
import TokenIcon from "./TokenIcon";
import Link from "next/link";

export interface TokenCardProps extends TokenT {
  index: number;
}
const TokenCardMobileView = (props: TokenCardProps) => {
  return (
    <Link href={"/token/2"} type="button">
      <div className="mb-[60px] lg:mb-[0px] lg:hidden bg-[url('/images/token-card-rectangle-mobile.svg')] object-contain bg-no-repeat relative w-[305px] min-h-[200px]">
        <div className="absolute top-[-70px] left-[100px]">
          <TokenIcon image={props.tokenIcon} />
        </div>

        <div className="py-[20px] flex flex-col items-center mr-[10px] mt-[15px]">
          <h3 className="text-[16px] font-[600]">
            {props.tokenName}
            {` [${props.tokenTicker}]`}
          </h3>
          <p className="text-[12px]">Marketcap: {props.marketCap}</p>
          <p className="text-[12px]">Creator: {props.creatorAddress}</p>
          <p className="text-[11px] max-w-[250px] pt-[10px] pb-[10px]">
            {props.tokenDescription}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default TokenCardMobileView;
