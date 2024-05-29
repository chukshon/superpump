import React from "react";
import Image from "next/image";

type UnionBorderContainerProps = {
  children: React.ReactNode;
};
const UnionBorderContainer = ({ children }: UnionBorderContainerProps) => {
  return (
    <div className="border-[1.5px] border-neutral-0 relative">
      {children}
      <Image
        src="/images/union/union-tl.svg"
        width="17"
        height="22"
        alt="union-tl-image"
        className="absolute left-[-2px] top-[-2px]"
      />
      <Image
        src="/images/union/union-bl.svg"
        width="17"
        height="22"
        alt="union-tl-image"
        className="absolute left-[-2px] bottom-[-2px]"
      />
      <Image
        src="/images/union/union-tr.svg"
        width="17"
        height="22"
        alt="union-tl-image"
        className="absolute right-[-2px] top-[-2px]"
      />
      <Image
        src="/images/union/union-br.svg"
        width="17"
        height="22"
        alt="union-tl-image"
        className="absolute right-[-2px] bottom-[-2px]"
      />
    </div>
  );
};

export default UnionBorderContainer;
