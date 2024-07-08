"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaAngleDown } from "react-icons/fa";

const DesktopNav = () => {
  const [selectedValue, setSelectedValue] = React.useState("Features");
  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };
  return (
    <Select onValueChange={handleSelect}>
      <SelectTrigger className="flex items-center gap-[10px] text-neutral-0 bg-transparent  outline-none focus:border-[#172532] focus:outline-none border-none">
        <p className="text-[16px]">{selectedValue}</p>
        <FaAngleDown />
      </SelectTrigger>
      <SelectContent className="bg-[#171717]  text-neutral-0">
        <SelectItem className="cursor-pointer" value="Features">
          Features
        </SelectItem>
        <SelectItem className="cursor-pointer" value="Trade">
          Trade
        </SelectItem>
        <SelectItem className="cursor-pointer" value="Sale">
          Sale
        </SelectItem>
        <SelectItem className="cursor-pointer" value="Earn">
          Earn
        </SelectItem>
        <SelectItem className="cursor-pointer" value="Vote">
          Vote
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default DesktopNav;
