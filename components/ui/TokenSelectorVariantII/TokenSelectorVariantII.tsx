"use client";
import SelectTokenModal from "@/components/Modals/SelectTokenModal.tsx";
import InputTab from "@/containers/Earn/components/InputTab";
import { useModalContext } from "@/context/ModalContext";
import Image from "next/image";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type TokenSelectorVariantIIProps = {
  label: string;
  balance: number;
  tokenTicker: string;
  tokenImage: string;
};

const TokenSelectorVariantII = ({
  label,
  balance,
  tokenTicker,
  tokenImage,
}: TokenSelectorVariantIIProps) => {
  const { showModal } = useModalContext();
  return (
    <div>
      {/* Label and total balance */}
      <div className="flex justify-between items-center mb-[10px]">
        <p className="text-[#47A7FF] text-[16px] font-[500]">{label}</p>
        <p className="text-[#4A4A4A] text-[13px]">
          Balance: {balance} {tokenTicker}
        </p>
      </div>

      {/* Token Selection */}
      <div className="border-variant-one bg-[rgba(0,0,0,0.24)] border-[1px] flex justify-between items-center rounded-[8px]  h-[55px] px-[20px]">
        {/* Token amount and usd equivalent */}
        <div>
          <p className="text-neutral-0 text-[16px]">3.5</p>
          <p className="text-[#4A4A4A] text-[13px]">$5,375 USD</p>
        </div>

        {/* Token Icon Selector  */}
        <button
          type="button"
          className="flex items-center gap-[5px] cursor-pointer"
        >
          <p className="text-neutral-0 text-[13px]">WFTM</p>
          <Image
            src={tokenImage}
            width="32"
            height="32"
            alt="Eth Logo"
            className="z-30"
            onClick={() => showModal(<SelectTokenModal />)}
          />
          <MdKeyboardArrowDown className="text-[#47A7FF]" />
        </button>
      </div>

      {/* Percentage Input Tabs */}
      <ul className="flex justify-between mt-[10px]">
        <InputTab value="25%" />
        <InputTab value="50%" />
        <InputTab value="75%" />
        <InputTab value="Max" />
      </ul>
    </div>
  );
};

export default TokenSelectorVariantII;
