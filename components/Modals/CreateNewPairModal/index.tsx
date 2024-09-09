"use client";
import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import TokenSelectorVariantII from "@/components/ui/TokenSelectorVariantII/TokenSelectorVariantII";
import DurationSelector from "@/containers/Earn/components/DurationSelector";
import {
  factoryContractConfig,
  poolExecutionerContractConfig,
} from "@/contracts/contracts";
import { useWriteContract, useReadContract } from "wagmi";
import { parseEther, formatEther, parseGwei } from "viem";

const CreateNewPairModal = () => {
  const { writeContract, isPending, error } = useWriteContract();
  const createNewPairArgs = {
    token: "",
    beneficiery: "0x0000000....000",
    base: 0,
    tax: true,
    ref: "",
  };
  const handleCreateNewPair = () => {
    writeContract({
      ...factoryContractConfig,
      functionName: "createNewPool",
      args: [{ ...createNewPairArgs }],
    });
  };
  return (
    <Modal modalHeaderTitle={`New Pair`} width={400}>
      <div className="px-[20px] pb-[20px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[2px]" />

        {/* First Token  */}
        <div className="mt-[20px]">
          <TokenSelectorVariantII
            label="Select First Token:"
            balance={6.9}
            tokenTicker={"WFTM"}
            tokenImage="/icons/wftm-logo.svg"
          />
        </div>

        {/* Second Token */}
        <div className="mt-[20px]">
          <TokenSelectorVariantII
            label="Select Second Token:"
            balance={6.9}
            tokenTicker={"WETH"}
            tokenImage="/icons/eth-logo.svg"
          />
        </div>

        {/* Lock Period */}
        <div className="mt-[20px]">
          <DurationSelector label=" Lock Period" />
        </div>

        {/* Price Information */}
        <div className="mt-[20px] flex items-center lg:items-start flex-col">
          <Divider className="bg-[rgba(71,167,255,0.24)] h-[2px] mb-[10px]" />
          <h3 className="text-[#47A7FF] font-[600] text-[15px] mb-[10px]">
            Price Information
          </h3>
          <p className="text-neutral-0 text-[16px]">25 WFTM per WETH</p>
          <p className="text-neutral-0 text-[16px]">0.001 WETH per WFTM</p>
        </div>

        <div className="flex justify-center">
          <button type="button" className="btn-variant-two mt-[20px]">
            Create Pair
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CreateNewPairModal;
