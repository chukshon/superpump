import React from "react";
import Modal from "../Modal";
import SuggestedTokenItem from "./SuggestedTokenItem";
import Divider from "@/components/ui/Divider";
import TokenListItem from "./TokenListItem";

const SelectTokenModal = () => {
  return (
    <Modal modalHeaderTitle={`Select a token`} width={400}>
      <div className="px-[20px] mt-[10px]">
        <input
          placeholder="Search name or Address"
          className="w-full input-linear-gradient  border-[#306392] border-[1px] rounded-[4px] placeholder:text-[#595959] placeholder:text-[15px] py-[5px] placeholder:text-center outline-none text-neutral-0"
        />
        {/* Suggested Token List */}
        <ul className="grid grid-cols-3 gap-x-[10px] gap-y-[10px] pt-[20px]">
          <SuggestedTokenItem />
          <SuggestedTokenItem />
          <SuggestedTokenItem />
          <SuggestedTokenItem />
          <SuggestedTokenItem />
        </ul>
      </div>
      <Divider className="my-[20px] bg-[#16253C]" />

      {/* Token List */}
      <ul className="flex flex-col gap-[10px]">
        <TokenListItem isActive={true} />
        <TokenListItem isActive={false} />
      </ul>
    </Modal>
  );
};

export default SelectTokenModal;
