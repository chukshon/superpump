import Image from "next/image";
import React from "react";

const TokenIcon = ({ image }: { image: string }) => {
  return (
    <div className="py-[10px] px-[20px] lg:py-[30px] lg:px-[30px] bg-[url('/images/token-icon-mobile.svg')] lg:bg-[url('/images/token-icon-bg.svg')] object-cover h-[150px] lg:h-[200px] lg:min-w-[220px] bg-no-repeat">
      <Image src={image} alt="" width="80" height="80" className="" />
    </div>
  );
};

export default TokenIcon;
