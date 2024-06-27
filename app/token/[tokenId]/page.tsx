import Desktop from "@/containers/tokenDetails/Desktop";
import Mobile from "@/containers/tokenDetails/Mobile";
import TopBar from "@/containers/tokenDetails/TopBar";
import Image from "next/image";

import React from "react";

const TokenDetails = () => {
  return (
    <div className="relative h-[100vh]">
      {/* Ecllipse */}
      <div className="absolute z-0 left-[0px] top-[100px] hidden lg:block h-[100%]">
        <Image
          src="/images/ecllipse-trading-page.svg"
          width={500}
          height={1000}
          alt="ecclipse background"
          className="w-[1000px] h-[1000px] object-cover"
        />
      </div>

      {/* Large Screen */}
      <Desktop />
      {/* Mobile Screen */}
      <Mobile />
    </div>
  );
};

export default TokenDetails;
