"use client";
import SelectVariantOne from "@/components/ui/SelectVariantOne";
import React from "react";
import { TokenT } from "@/types";
import TokenCard from "./TokenCard";
import { useModalContext } from "@/context/ModalContext";
import CreateTokenModal from "@/components/Modals/CreateTokenModal";
import DropdownVariantOne from "@/components/ui/DropdownVariantOne";

const TokenList = () => {
  const DropDownMenuContents = [
    {
      label: "Bump",
      value: "bump",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "Oldest Created",
      value: "OldestCreated",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "Newest Created",
      value: "NewestCreated",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "Token Name",

      value: "TokenName",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "MarketCap (Highest)",
      value: "MarketCapHighest",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "MarketCap (Lowest)",
      value: "MarketCapLowest",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "Highest Price",
      value: "Highest Price",
      onClick: () => {
        console.log("bump");
      },
    },
    {
      label: "Lowest Price",
      value: "Lowest Price",
      onClick: () => {
        console.log("bump");
      },
    },
  ];

  const { showModal } = useModalContext();
  type TokenListT = "launched" | "sale";
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

  const [selectedTab, setSelectedTab] = React.useState("launched");

  const handleSwitchTab = (tab: TokenListT) => {
    setSelectedTab(tab);
  };

  const TabData = [
    {
      label: "LAUNCHED",
      value: "launched",
    },
    {
      label: "Sale",
      value: "sale",
    },
  ];
  return (
    <div className="">
      {/* Top Action Bar */}
      <div className="gap-[50px] border-[1px] border-neutral-0 rounded-[10px] py-[10px] px-[10px] flex justify-between">
        <ul className="w-full bg-neutral-900 border-[1px] border-[#797A7C] rounded-[5px] px-[10px] flex gap-[10px] py-[10px]">
          {TabData.map((tab, index) => {
            return (
              <button
                key={index}
                type="button"
                onClick={() => handleSwitchTab(tab.value as TokenListT)}
                className={`${
                  tab.value === selectedTab && "bg-[#26B6EA]"
                }   py-[7px] flex items-center justify-center rounded-[5px] w-[50%] border-[1px] border-[#797A7C]`}
              >
                <p>{tab.label}</p>
              </button>
            );
          })}
        </ul>
        <div className="flex w-full items-center gap-[10px]">
          <button
            type="button"
            onClick={() => {
              showModal(<CreateTokenModal />);
            }}
            className="border-[1px] border-neutral-0 w-[50%] rounded-[4px] bg-custom-radial py-[10px] px-[20px"
          >
            Create Token
          </button>
          <div className="w-[50%] flex items-center gap-[10px]">
            <p>Sort:</p>
            <DropdownVariantOne
              dropDownMenuContent={DropDownMenuContents}
              defaultSelectedItem={{ label: "Features", value: "features" }}
            />
          </div>
        </div>
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
