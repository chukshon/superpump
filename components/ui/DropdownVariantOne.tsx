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
};

const DropdownVariantOne = ({
  defaultSelectedItem,
  dropDownMenuContent,
}: DropdownVariantOneProps) => {
  const [selectedItem, setSelectedItem] = React.useState(
    defaultSelectedItem.label
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="text-neutral-0 flex items-center gap-[5px] outline-none">
        <p>{selectedItem}</p>
        <FaAngleDown />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropDownMenuContent.map((item) => {
          return (
            <DropdownMenuItem
              className="cursor-pointer capitalize"
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
