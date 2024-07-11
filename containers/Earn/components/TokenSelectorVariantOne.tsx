"use client";

import SelectTokenModal from "@/components/Modals/SelectTokenModal.tsx";
import { useModalContext } from "@/context/ModalContext";
import Image from "next/image";
import React from "react";
import InputTab from "./InputTab";

type TokenSelectorVariantOneProps = {
  label?: string;
};
const TokenSelectorVariantOne = ({ label }: TokenSelectorVariantOneProps) => {
  const { showModal } = useModalContext();
  return (
    <div>
      <h3 className="text-[#47A7FF] font-[600] text-[15px] mb-[10px]">
        {label}
      </h3>
      <div className="border-variant-one bg-[rgba(0,0,0,0.24)] border-[1.5px] flex items-center rounded-[8px]  h-[60px] px-[20px]">
        <div className="flex items-start justify-between w-full">
          {/* Left */}
          <div className="flex items-center gap-[10px] ">
            <Image
              src="/icons/wftm-logo.svg"
              width="32"
              height="32"
              alt="Eth Logo"
              className="z-30 cursor-pointer"
              onClick={() => showModal(<SelectTokenModal />)}
            />
            <span>
              <p className="text-neutral-0 text-[18px]">3.5</p>
              <p className="text-[#4A4A4A] text-[13px]">$5,375 USD</p>
            </span>
          </div>

          {/* Right */}
          <span>
            <p className="text-[#4A4A4A] text-[13px]">Balance: 6.9 Ftm</p>
          </span>
        </div>
      </div>
      <ul className="flex justify-between w-full mt-[20px]">
        <InputTab value="25%" />
        <InputTab value="50%" />
        <InputTab value="75%" />
        <InputTab value="Max" />
      </ul>
    </div>
  );
};

export default TokenSelectorVariantOne;
