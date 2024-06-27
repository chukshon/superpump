import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectVariantOneT = {
  label?: string;
  options?: string[];
  className?: string;
};
const SelectVariantOne = ({ label, className }: SelectVariantOneT) => {
  return (
    <div className={`flex items-center gap-[10px] ${className}`}>
      {label && <label className="">{label}</label>}

      <div className="w-full">
        <Select>
          <SelectTrigger className="max-w-[700px] text-[#828282] bg-[#191E23] border-none outline-none focus:border-none ">
            <SelectValue
              placeholder="Created(Ascending)"
              className="text-neutral-0"
            />
          </SelectTrigger>
          <SelectContent className="bg-[#191E23]">
            <SelectItem value="Ascending">Created(Ascending)</SelectItem>
            <SelectItem value="Descending">Created (Descending)</SelectItem>
            <SelectItem value="MarketCap(Highest)">
              Market Cap (Highest)
            </SelectItem>
            <SelectItem value="MarketCap(Lowest)">
              Market Cap (Lowest)
            </SelectItem>
            <SelectItem value="HighestPrice">Highest Price</SelectItem>
            <SelectItem value="Lowest Price">Lowest Price</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectVariantOne;
