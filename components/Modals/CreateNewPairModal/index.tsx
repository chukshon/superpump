"use client";
import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import TokenSelectorVariantII from "@/components/ui/TokenSelectorVariantII/TokenSelectorVariantII";

const CreateNewPairModal = () => {
  return (
    <Modal modalHeaderTitle={`New Pair`} width={400}>
      <div className="px-[20px] h-[500px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[1.5px]" />
        <div className="mt-[20px]">
          <TokenSelectorVariantII
            label="Select First Token:"
            balance={6.9}
            tokenTicker={"WFTM"}
            tokenImage="/icons/wftm-logo.svg"
          />
        </div>
        <div className="mt-[20px]">
          <TokenSelectorVariantII
            label="Select Second Token:"
            balance={6.9}
            tokenTicker={"WETH"}
            tokenImage="/icons/eth-logo.svg"
          />
        </div>
      </div>
    </Modal>
  );
};

export default CreateNewPairModal;
