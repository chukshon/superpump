"use client";
import React from "react";
import LockOverView from "./LockOverView";
import StakeSection from "./StakeSection/StakeSection";
import PoolsSection from "./PoolsSection/PoolsSection";
import { useModalContext } from "@/context/ModalContext";
import CreateNewPairModal from "@/components/Modals/CreateNewPairModal";

const LockSection = () => {
  const { showModal } = useModalContext();
  return (
    <div className=" px-[20px] lg:px-[30px]">
      <div className="lg:border-[#172532] lg:border-[1px] rounded-[8px] px-[0px] lg:px-[40px] lg:py-[30px]">
        <div className="flex flex-col lg:flex-row gap-[50px]">
          <div className="lg:w-[60%]">
            <StakeSection />
          </div>
          <div className="lg:w-[40%]">
            <LockOverView />
          </div>
        </div>

        {/* Visible on only mobile */}
        <div className="flex flex-col gap-[10px]">
          <button className="w-full lg:hidden mt-[30px] bg-custom-radial text-neutral-0 py-[10px] px-[30px] rounded-[5px]">
            Stake
          </button>
          <button
            type="button"
            onClick={() => {
              showModal(<CreateNewPairModal />);
            }}
            className="w-full lg:hidden text-neutral-0 border-[2px] border-[#47A7FF] bg-[#0D0D0D] rounded-[4px] py-[10px] px-[10px]"
          >
            Create New Pair
          </button>
        </div>

        {/* Pools */}
        <PoolsSection />
      </div>
    </div>
  );
};

export default LockSection;
