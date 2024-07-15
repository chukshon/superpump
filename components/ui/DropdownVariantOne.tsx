"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaAngleDown } from "react-icons/fa";

type DropdownVariantOneProps = {
  dropDownMenuContent: { label: string; value: string; onClick: () => void }[];
  defaultSelectedItem: { label: string; value: string };
  dropDownTriggerClassName?: string;
};

const DropdownVariantOne = ({
  defaultSelectedItem,
  dropDownMenuContent,
  dropDownTriggerClassName,
}: DropdownVariantOneProps) => {
  const [selectedItem, setSelectedItem] = React.useState(
    defaultSelectedItem.label
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={`${dropDownTriggerClassName} justify-between rounded-sm px-2 py-1.5 bg-[#3C3C3C] min-w-[200px] text-[#828282] flex items-center gap-[5px] outline-none`}
      >
        <p className="">{selectedItem}</p>
        <FaAngleDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-[#3C3C3C] border-none text-neutral-0 min-w-[200px] mt-[5px]"
      >
        {dropDownMenuContent.map((item) => {
          return (
            <DropdownMenuItem
              className="border-t-[2px] border-[#444444] bg-[#3C3C3C] rounded-none cursor-pointer capitalize"
              onClick={() => {
                setSelectedItem(item.label);
                item.onClick();
              }}
              key={item.value}
            >
              {item.value}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownVariantOne;
