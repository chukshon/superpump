import React, { useEffect } from "react";
import PriceItem from "./PriceItem";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { useModalContext } from "@/context/ModalContext";
import SelectTokenModal from "@/components/Modals/SelectTokenModal.tsx";
import { BaseError } from "viem";
import { useWriteContract, useReadContract } from "wagmi";
import {
  factoryContractConfig,
  poolExecutionerContractConfig,
} from "@/contracts/contracts";
import { toBytes } from "viem";
import { parseEther, formatEther, parseGwei } from "viem";

const BuySection = () => {
  const { showModal } = useModalContext();

  const { writeContract, isPending, error } = useWriteContract();

  const handleBuy = () => {
    writeContract({
      ...poolExecutionerContractConfig,
      address: "0xBCeE2669070dAF7Fb53f8071Db1E0c111a34276f",
      functionName: "buyToken_Qdy",
      args: [parseEther("0.00000001")],
      value: parseEther("0.00000001"),
    });
  };

  const {
    data: showPoolAddress,
    isLoading: getGreetingLoading,
    isError: getGreetingError,
    refetch: refetchGreeting,
  } = useReadContract({
    ...factoryContractConfig,
    functionName: "showPoolAddress",
    args: ["0xe9C34aBe02B1cfc9388C56f4eE9c32263744caBb"],
  });

  const {
    data: USDPerToken,
    isLoading: USDPerTokenLoading,
    isError: USDPerTokenError,
    refetch: refetchUSDPerToken,
  } = useReadContract({
    ...poolExecutionerContractConfig,
    address: "0xBCeE2669070dAF7Fb53f8071Db1E0c111a34276f",
    functionName: "USDPerToken",
  });

  useEffect(() => {
    if (showPoolAddress) {
      console.log(
        showPoolAddress,
        // formatEther(showPoolAddress as bigint, "wei"),
        "showPoolAddress"
      );
    }
  }, [showPoolAddress]);

  useEffect(() => {
    if (USDPerToken) {
      console.log(
        formatEther(USDPerToken as bigint, "wei"),
        // formatEther(showPoolAddress as bigint, "wei"),
        "USDPerToken"
      );
    }
  }, [USDPerToken]);

  // useEffect(() => {
  //   if (nativeBase) {
  //     console.log(nativeBase, "nativeBase");
  //   }
  // }, [nativeBase]);

  useEffect(() => {
    console.log(isPending, "isPending");
  }, [isPending]);

  useEffect(() => {
    console.log((error as BaseError)?.shortMessage || error?.message, "error");
  }, [error]);

  return (
    <div>
      {/* Fixed Price List */}
      <ul className="flex flex-wrap gap-[10px]">
        <PriceItem
          amount={"5"}
          hasIcon={true}
          icon="/icons/ftm-logo-priceitem.svg"
        />
        <PriceItem
          amount={"10"}
          hasIcon={true}
          icon="/icons/ftm-logo-priceitem.svg"
        />
        <PriceItem
          amount={"15"}
          hasIcon={true}
          icon="/icons/ftm-logo-priceitem.svg"
        />
        <PriceItem
          amount={"20"}
          hasIcon={true}
          icon="/icons/ftm-logo-priceitem.svg"
        />
        <PriceItem
          amount={"25"}
          hasIcon={true}
          icon="/icons/ftm-logo-priceitem.svg"
        />
      </ul>

      {/* Price Input */}
      <div className="mt-[10px]">
        <div className="border-[1.5px] border-[#172532] flex gap-[4px] items-center pl-[10px] py-[10px] rounded-[10px]">
          <Image
            src="/icons/ftm-logo-priceitem.svg"
            width={20}
            height={20}
            alt="ftm logo superpump fun trade"
            className="w-[14px] h-[16px]"
          />
          <input
            placeholder="Enter amount in FTM"
            className="w-[70%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4A] text-neutral-50 "
          />
        </div>
      </div>
      {/* Token Selector */}
      <button
        type="button"
        onClick={() => {
          showModal(<SelectTokenModal />);
        }}
        className="w-full mt-[10px] cursor-pointer flex items-center gap-[10px] pl-[20px] py-[10px] border-[1.5px] border-[#172532] rounded-[10px]"
      >
        <RiArrowDownSLine className="text-neutral-0" />
        <p className="text-[#4A4A4A]">or select a token</p>
      </button>

      {/* Advanced Settings */}
      <button
        type="button"
        className="text-[#4A4A4A] font-chakra_Petch text-[13px] w-full py-[10px]"
      >
        <p className="text-right">Advanced Settings</p>
      </button>

      {/* Quick Buy/Sell */}
      <button
        type="button"
        onClick={() => handleBuy()}
        className="text-neutral-0 rounded-[4px] font-[600] text-[16px] bg-green-radial-gradient w-full text-center py-[10px]"
      >
        Quick Buy
      </button>

      <p className="text-[#4A4A4A] text-[12px] mt-[10px]">
        By clicking “Quick Buy”, you agree to have your transaction immediately
        sent.
      </p>
    </div>
  );
};

export default BuySection;
