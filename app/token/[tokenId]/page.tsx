import Desktop from "@/containers/tokenDetails/Desktop";
import Mobile from "@/containers/tokenDetails/Mobile";
import TopBar from "@/containers/tokenDetails/TopBar";
import Image from "next/image";

import React from "react";

const TokenDetails = () => {
  return (
    <div className="relative">
      {/* Ecllipse */}
      <div className="absolute z-0 top-[700px] hidden lg:block">
        <Image
          src="/images/ecllipse-trading-page.svg"
          width={500}
          height={500}
          alt="ecclipse background"
        />
      </div>
      {/* Top Bar */}
      <TopBar />
      {/* Large Screen */}
      <Desktop />
      {/* Mobile Screen */}
      <Mobile />
    </div>
  );
};

export default TokenDetails;
