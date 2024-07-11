import React from "react";
import Modal from "../Modal";
import Divider from "@/components/ui/Divider";
import InputVariantOne from "@/components/FormFields/InputVariantOne";
import TextArea from "@/components/FormFields/TextArea";
import FileUpload from "./FileUpload";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useModalContext } from "@/context/ModalContext";
import PresaleSettingsModal from "../PresaleSettingsModal";

const CreateTokenModal = () => {
  const { showModal } = useModalContext();
  return (
    <Modal modalHeaderTitle={`Token Creation`} width={714}>
      <div className="px-[20px]">
        <Divider className="bg-[rgba(71,167,255,0.24)] h-[1.5px]" />
      </div>

      <div className="px-[20px] overflow-y-auto py-[20px]">
        <div className="flex w-full gap-[15px] flex-col lg:flex-row">
          <InputVariantOne
            name="Token Name"
            type="text"
            placeholder="Token Name"
          />
          <InputVariantOne name="Ticker" type="text" placeholder="Ticker" />
        </div>
        <TextArea
          name="description"
          placeholder="Description"
          className="mt-[10px]"
        />
        <div className="mt-[10px] flex gap-[20px] flex-col lg:flex-row">
          <div className="flex flex-col gap-[20px] lg:w-[50%]">
            <FileUpload />
            <InputVariantOne
              name="lpAmount"
              type="text"
              placeholder="Enter LP amount in FTM"
            />
          </div>
          <div className="flex flex-col gap-[28px] lg:w-[50%]">
            <InputVariantOne
              name="websiteLink"
              type="text"
              placeholder="Website link"
            />
            <InputVariantOne
              name="twitterLink"
              type="text"
              placeholder="Twitter link"
            />
            <InputVariantOne
              name="discordLink"
              type="text"
              placeholder="Discord link"
            />
            <InputVariantOne
              name="telegramLink"
              type="text"
              placeholder="Telegram link"
            />
            <InputVariantOne
              name="tokenSupply"
              type="text"
              placeholder="Token Supply"
            />
          </div>
        </div>

        <div className="mt-[40px] flex gap-[35px] lg:gap-[20px] flex-col-reverse lg:flex-row ">
          <div className="flex flex-col gap-[10px] lg:w-[40%] items-center lg:items-start">
            <button
              type="button"
              className="btn-variant-two uppercase"
              onClick={() => {
                showModal(<PresaleSettingsModal />);
              }}
            >
              Presale
            </button>
            <button className="btn-variant-two uppercase">Fair Launch</button>
          </div>

          <div className="flex flex-col gap-[20px] lg:w-[60%]">
            <RadioGroup defaultValue="tax-on" className="flex gap-[10px]">
              <div className="flex items-center gap-[5px]">
                <RadioGroupItem value="tax-on" id="tax-on" />
                <label htmlFor="tax-on" className="text-neutral-0">
                  Tax On
                </label>
              </div>
              <div className="flex items-center gap-[5px]">
                <RadioGroupItem value="tax-off" id="tax-off" />
                <label htmlFor="tax-off" className="text-neutral-0">
                  Tax Off
                </label>
              </div>
            </RadioGroup>
            <Slider className="w-full" />
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTokenModal;
