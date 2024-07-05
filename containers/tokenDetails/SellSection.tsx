import React from "react";
import PriceItem from "./PriceItem";
import Image from "next/image";
import { RiArrowDownSLine } from "react-icons/ri";
import { useModalContext } from "@/context/ModalContext";
import SelectTokenModal from "@/components/Modals/SelectTokenModal.tsx";
import { Select } from "@radix-ui/react-select";

const SellSection = () => {
  return (
    <div>
      {/* Fixed Price List */}
      <ul>
        <PriceItem amount={5} hasIcon={false} />
      </ul>

      {/* Price Input */}
      <div className="mt-[10px]">
        <div className="border-[1.5px] border-[#172532] flex gap-[4px] items-center pl-[10px] py-[10px] rounded-[10px]">
          <input
            placeholder="Enter amount in FTM"
            className="w-[70%] outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4A] text-neutral-50 "
          />
        </div>
      </div>

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
        className="text-neutral-0 rounded-[4px] font-[600] text-[16px] btn-bg-red-linear-gradient w-full text-center py-[10px]"
      >
        Quick Sell
      </button>

      <p className="text-[#4A4A4A] text-[12px] mt-[10px]">
        Estimation of expected payout incl. price impact and fees is only
        enabled for Raydium AMM. Once you click on Quick Sell, your transaction
        is sent immediately.
      </p>
    </div>
  );
};

export default SellSection;
