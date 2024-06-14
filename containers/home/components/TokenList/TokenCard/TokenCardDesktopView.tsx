import React from "react";
import { TokenT } from "@/types";
import Image from "next/image";
import TokenIcon from "./TokenIcon";
import Link from "next/link";

export interface TokenCardProps extends TokenT {
  index: number;
}

const TokenCardDesktopView = (props: TokenCardProps) => {
  const isEven = (props.index + 1) % 2 === 0;
  return (
    <Link href={"/token/2"} type="button">
      {!isEven ? (
        <div className="hidden lg:block bg-[url('/images/tokencardbgodd-desktop.svg')] h-[200px] min-w-[420px] object-contain bg-no-repeat relative">
          <div className="absolute top-[15%] left-[-50px]">
            <TokenIcon image={props.tokenIcon} />
          </div>
          <Image
            src="/images/short-blue-rectangle.png"
            width="32"
            height="8"
            alt="short-blue-rectangle"
            className="w-[50px] h-[18px] absolute left-[25px]"
          />
          <Image
            src="/images/short-blue-horizontal-rectangle.png"
            width="32"
            height="8"
            alt="short-blue-rectangle"
            className="w-[20px] h-[50px] bottom-[25px] absolute right-[-4px]"
          />
          <Image
            src="/images/long-blue-rectangle.png"
            width="32"
            height="8"
            alt="short-blue-rectangle"
            className="bottom-[-3px] w-[200px] h-[18px] absolute left-[25px]"
          />

          <div className="py-[20px] pl-[100px]">
            <h3 className="text-[24px]">
              {props.tokenName}
              {` [${props.tokenTicker}]`}
            </h3>
            <p className="text-[16px] mt-[10px] mb-[5px]">
              Marketcap: {props.marketCap}
            </p>
            <p className="text-[16px]">Creator: {props.creatorAddress}</p>
            <p className="text-[12px] max-w-[250px]">
              {props.tokenDescription}
            </p>
          </div>
        </div>
      ) : (
        <div className="relative hidden lg:block bg-[url('/images/tokencardbgeven-desktop.svg')] h-[200px] min-w-[420px] object-contain bg-no-repeat">
          <div className="absolute top-[15%] right-[-120px]">
            <TokenIcon image={props.tokenIcon} />
          </div>
          <Image
            src="/images/short-blue-rectangle.png"
            width="32"
            height="8"
            alt="short-blue-rectangle"
            className="w-[50px] h-[18px] absolute right-[35px]"
          />
          <Image
            src="/images/short-blue-horizontal-rectangle.png"
            width="32"
            height="8"
            alt="short-blue-rectangle"
            className="w-[20px] h-[50px] top-[30px] absolute left-[10px]"
          />
          <Image
            src="/images/long-blue-rectangle.png"
            width="32"
            height="8"
            alt="long-blue-rectangle"
            className="bottom-[-3px] w-[200px] h-[18px] absolute right-[50px]"
          />
          <div className="py-[20px] pr-[100px] px-[30px]">
            <h3 className="text-[24px] text-right">
              {props.tokenName}
              {` [${props.tokenTicker}]`}
            </h3>
            <p className="text-right text-[16px] mt-[10px] mb-[5px]">
              Marketcap: {props.marketCap}
            </p>
            <p className="text-right text-[16px] mb-[3px]">
              Creator: {props.creatorAddress}
            </p>
            <p className="text-right text-[12px] max-w-[320px]">
              {props.tokenDescription}
            </p>
          </div>
        </div>
      )}
    </Link>
  );
};

export default TokenCardDesktopView;
