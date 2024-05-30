import Image from "next/image";
import React from "react";

const TokenIcon = ({ image }: { image: string }) => {
  return (
    <div className="py-[30px] px-[30px] bg-[url('/images/token-icon-bg.svg')] object-cover h-[200px] min-w-[220px] bg-no-repeat">
      <Image src={image} alt="" width="80" height="80" className="" />
    </div>
  );
};

export default TokenIcon;
