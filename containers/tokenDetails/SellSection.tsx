import React from "react";
import PriceItem from "./PriceItem";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RiArrowDownSLine } from "react-icons/ri";

const SellSection = () => {
  return (
    <div>
      {/* Fixed Price List */}
      <ul>
        <PriceItem amount={5} hasIcon={false} />
      </ul>

      {/* Price Input */}
      <div className="mt-[10px]">
        <div className="flex gap-[0px] items-center w-full">
          <SelectDropdown />
          <input
            placeholder="Enter amount in FTM"
            className="rounded-tr-[8px] rounded-br-[8px] pl-[10px] py-[10px] border-[1.5px] border-[#172532] w-full outline-none bg-[transparent] placeholder:text-[16px] text-[16px] placeholder:text-[#4A4A4A] text-neutral-50 "
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

      {/* Quick Sell */}
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

const SelectDropdown = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="rounded-tl-[8px] rounded-bl-[8px] h-[48px] text-[#828282] bg-transparent  border-[1.5px] border-[#172532] border-r-[0px] outline-none focus:border-[#172532] focus:outline-none">
          <span>
            <SelectValue />
          </span>
        </SelectTrigger>
        <SelectContent className="bg-[#171717] border-[1.5px] border-[#172532] text-neutral-0">
          <SelectItem value="%">%</SelectItem>
          <SelectItem value="FTM">FTM</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SellSection;
