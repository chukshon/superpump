import React from "react";

type InputVariantOneProps = {
  name: string;
  type: string;
  placeholder: string;
  className?: string;
};
const InputVariantOne = ({
  name,
  type,
  placeholder,
  className,
}: InputVariantOneProps) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      className={`${className} rounded-[8px] text-neutral-0 pl-[10px] w-full bg-[rgba(0,0,0,0.24)] py-[8px] border-variant-one placeholder:text-[rgba(130,130,130,0.56)] bg-transparent outline-none`}
    />
  );
};

export default InputVariantOne;
