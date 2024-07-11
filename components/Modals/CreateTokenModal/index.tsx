import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";

const CreateTokenModal = () => {
  return (
    <Modal modalHeaderTitle={`Token Creation`} width={514}>
      <div className="px-[20px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[1.5px]" />
      </div>

      <div className="h-[900px] "></div>
    </Modal>
  );
};

export default CreateTokenModal;
