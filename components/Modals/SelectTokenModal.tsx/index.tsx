import React from "react";
import Modal from "../Modal";
import SuggestedTokenItem from "./SuggestedTokenItem";

const SelectTokenModal = () => {
  return (
    <Modal modalHeaderTitle={`Select a token]`} width={514}>
      <input
        placeholder="Search name or Address"
        className="border-[#306392] border-[1.5px] rounded-[4px] placeholder:text-[#595959] placeholder:text-[12px]"
      />
    </Modal>
  );
};

export default SelectTokenModal;
