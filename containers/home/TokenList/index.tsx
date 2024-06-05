import SelectVariantOne from "@/components/ui/SelectVariantOne";
import React from "react";
import { TokenT } from "@/types";
import TokenCard from "./TokenCard";

const TokenList = () => {
  const tokenList: TokenT[] = [
    {
      tokenName: "SUPERPUMP",
      tokenIcon: "/images/tokens/superpump-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$PUMP",
    },
    {
      tokenName: "BEACHPLS",
      tokenIcon: "/images/tokens/beach-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$BPLS",
    },
    {
      tokenName: "PEPEFLAG",
      tokenIcon: "/images/tokens/pepeflag-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$PFLAG",
    },
    {
      tokenName: "LAMBORANGE",
      tokenIcon: "/images/tokens/lamborange-token.svg",
      marketCap: "25,000,000",
      creatorAddress: "0x123....ab1c1d",
      tokenDescription:
        "This token is created to profit 100000x. You will become a millionaire!!! Buy this token and forget about it. Check again after 3 months.",
      tokenTicker: "$LORA",
    },
  ];
  return (
    <div className="">
      {/* Top Action Bar */}
      <div className=" border-[1px] border-neutral-0 rounded-[10px] flex  py-[10px] px-[10px] gap-[40px]">
        <button className="w-[60%] rounded-[4px] bg-custom-radial py-[3px] px-[20px">
          Create Token
        </button>
        <SelectVariantOne label="Sort:" />
      </div>

      {/* Token List */}
      <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px] px-[10px] mt-[30px] justify-center">
        {tokenList.map((token, index) => {
          return <TokenCard key={token.tokenName} {...token} index={index} />;
        })}
      </ul>
    </div>
  );
};

export default TokenList;
