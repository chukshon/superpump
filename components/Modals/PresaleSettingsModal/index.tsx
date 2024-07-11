import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import InputVariantOne from "@/components/FormFields/InputVariantOne";
import TextArea from "@/components/FormFields/TextArea";
import FileUpload from "../CreateTokenModal/FileUpload";

const PresaleSettingsModal = () => {
  return (
    <Modal modalHeaderTitle={`Presale Settings`} width={714}>
      <div className="px-[20px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[1.5px]" />
      </div>

      <div className="px-[20px] overflow-y-auto py-[20px]">
        <TextArea
          name="description"
          placeholder="Presale Description"
          className="mt-[10px]"
        />
        <div className="mt-[10px] flex w-full gap-[15px] flex-col lg:flex-row">
          <InputVariantOne
            name="presaleAmount"
            type="text"
            placeholder="Token amount for Presale"
          />
          <InputVariantOne
            name="liquityAmount"
            type="text"
            placeholder="Token amount for Liquidity"
          />
        </div>

        <div className="mt-[20px]">
          <FileUpload />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] lg:gap-[28px] mt-[20px]">
          <InputVariantOne
            name="softcapTarget"
            type="text"
            placeholder="Softcap Target"
          />
          <InputVariantOne
            name="listing"
            type="text"
            placeholder="Listing On"
          />
          <InputVariantOne
            name="startTime"
            type="text"
            placeholder="Start Time"
          />
          <InputVariantOne
            name="presalePrice"
            type="text"
            placeholder="Presale price per token"
          />
          <InputVariantOne
            name="launchingPrice"
            type="text"
            placeholder="Launching Price"
          />
          <InputVariantOne
            name="liquidityPercent"
            type="text"
            placeholder="Liquidity Percent"
          />
        </div>

        <div className="mt-[40px] flex justify-center lg:justify-start ">
          <button className="btn-variant-two uppercase">Confirm</button>
        </div>
      </div>
    </Modal>
  );
};

export default PresaleSettingsModal;
