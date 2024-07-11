"use client";
import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import StakeInputField from "../CreateNewPairModal/StakeInputField";
import { useModalContext } from "@/context/ModalContext";
import CreateNewPairModal from "../CreateNewPairModal";

const LiquidStakingModal = () => {
  const { showModal } = useModalContext();
  return (
    <Modal modalHeaderTitle={`Liquid Staking`} width={400}>
      <div className="px-[20px] pb-[20px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[2px] mb-[20px]" />

        <StakeInputField label="Stake your FOMO/fFOMO:" />
        <div className="my-[20px]">
          <span className="flex justify-between">
            <p className="text-[#47A7FF] text-[16px]">Exchange Rate:</p>
            <p className="text-neutral-0 text-[16px]">1 FOMO = 1.3 fFOMO</p>
          </span>
          <span className="flex justify-between mt-[10px] mb-[15px]">
            <p className="text-[#47A7FF] text-[16px]">Est. APR:</p>
            <p className="text-neutral-0 text-[16px]">3.000%</p>
          </span>
        </div>
        <button className="btn-variant-two w-full uppercase mb-[10px]">
          Proceed
        </button>
        <button
          type="button"
          className="btn-variant-two w-full uppercase"
          onClick={() => {
            showModal(<CreateNewPairModal />);
          }}
        >
          Create Pair
        </button>
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[2px] my-[20px]" />
        <p className="text-neutral-0 text-[16px]">Withdraw</p>
        <span className="mt-[10px] flex justify-between">
          <p className="text-[#47A7FF] text-[18px]">Est. APR:</p>
          <p className="text-neutral-0 text-[18px]">3.000%</p>
        </span>
        <p className="text-[#7C7C7C] text-[14px] text-right mb-[10px]">
          $55.55
        </p>
        <button className="btn-variant-two w-full uppercase">Withdraw</button>
      </div>
    </Modal>
  );
};

export default LiquidStakingModal;
