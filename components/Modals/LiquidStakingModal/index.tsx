"use client";
import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import StakeInputField from "../CreateNewPairModal/StakeInputField";

const LiquidStakingModal = () => {
  return (
    <Modal modalHeaderTitle={`New Pair`} width={400}>
      <div className="px-[20px] pb-[20px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[2px]" />

        <StakeInputField label="Stake your FOMO/fFOMO:" />
        <div>
          <span>
            <p className="text-[#47A7FF] text-[16px]">Exchange Rate:</p>
            <p className="text-neutral-0 text-[16px]">1 FOMO = 1.3 fFOMO</p>
          </span>
          <span>
            <p className="text-[#47A7FF] text-[16px]">Est. APR:</p>
            <p className="text-neutral-0 text-[16px]">3.000%</p>
          </span>
        </div>
        <button className="button-variant-one w-full uppercase">Proceed</button>
        <button className="button-variant-one w-full uppercase">
          Create Pair
        </button>
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[2px] my-[10px]" />
        <p className="text-neutral-0 text-[16px]">Withdraw</p>
        <span className="my-[20px]">
          <p className="text-[#47A7FF] text-[18px]">Est. APR:</p>
          <p className="text-neutral-0 text-[18px]">3.000%</p>
        </span>
        <p className="text-[#7C7C7C] text-[14px]">$55.55</p>
        <button className="button-variant-one w-full uppercase">
          Withdraw
        </button>
      </div>
    </Modal>
  );
};

export default LiquidStakingModal;
