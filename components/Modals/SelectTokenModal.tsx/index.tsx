import React from "react";
import Modal from "../Modal";
import SuggestedTokenItem from "./SuggestedTokenItem";

const SelectTokenModal = () => {
  return (
    <Modal modalHeaderTitle={`Select a token`} width={400}>
      <div className="px-[10px]">
        <input
          placeholder="Search name or Address"
          className="w-full input-linear-gradient  border-[#306392] border-[1px] rounded-[4px] placeholder:text-[#595959] placeholder:text-[15px] py-[5px] placeholder:text-center outline-none text-neutral-0"
        />
        {/* Suggested Token List */}
        <ul className="grid grid-cols-3 gap-x-[10px] gap-y-[10px] py-[20px]">
          <SuggestedTokenItem />
          <SuggestedTokenItem />
          <SuggestedTokenItem />
          <SuggestedTokenItem />
          <SuggestedTokenItem />
        </ul>
      </div>
    </Modal>
  );
};

export default SelectTokenModal;
