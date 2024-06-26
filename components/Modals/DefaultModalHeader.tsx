import Image from "next/image";
import React from "react";

type DefaultModalHeaderProps = {
  modalHeaderTitle: string;
  handleCloseModal: () => void;
};

const DefaultModalHeader = ({
  modalHeaderTitle,
  handleCloseModal,
}: DefaultModalHeaderProps) => {
  return (
    <div className="flex items-center justify-between px-[15px] py-[15px]">
      <h3 className="font-sora font-bold text-neutral-0">{modalHeaderTitle}</h3>
      <button type="button" className="disabled:pointer-events-none">
        <Image
          src={"/icons/close-icon.svg"}
          width={20}
          height={20}
          alt="superpump modal close icon"
          onClick={handleCloseModal}
        />
      </button>
    </div>
  );
};

export default DefaultModalHeader;
