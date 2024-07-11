import React from "react";

type TextAreaProps = {
  name: string;
  placeholder: string;
  className?: string;
};
const TextArea = ({ name, placeholder, className }: TextAreaProps) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`${className} min-h-[100px] rounded-[8px] text-neutral-0 pl-[10px] w-full bg-[rgba(0,0,0,0.24)] py-[8px] border-variant-one placeholder:text-[rgba(130,130,130,0.56)] bg-transparent outline-none`}
    />
  );
};

export default TextArea;
