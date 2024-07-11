"use client";
import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import TokenSelectorVariantII from "@/components/ui/TokenSelectorVariantII/TokenSelectorVariantII";
import DurationSelector from "@/containers/Earn/components/DurationSelector";

const CreateNewPairModal = () => {
  return (
    <Modal modalHeaderTitle={`New Pair`} width={400}>
      <div className="px-[20px] h-[500px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[1.5px]" />

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
      </div>
    </Modal>
  );
};

export default CreateNewPairModal;
