import InputVariantOne from "@/components/FormFields/InputVariantOne";
import React from "react";

const FileUpload = () => {
  return (
    <div className="flex flex-col gap-[20px]">
      <div className="text-neutral-0 rounded-[8px] border-variant-one w-[full] h-[200px] flex items-center justify-center">
        Show Preview
      </div>
      <div className="flex gap-[10px]">
        <button className="btn-variant-one w-[40%] px-[10px] lg:w-[40%] text-[13px]">
          Upload Logo
        </button>
        <div className="w-full lg:w-[60%]">
          <InputVariantOne
            type="text"
            name="imageLink"
            placeholder="or Paste image link here"
            className="py-[8px] text-[13px]"
          />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
