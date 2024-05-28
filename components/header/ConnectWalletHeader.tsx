import Image from "next/image";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";

const ConnectWalletHeader = () => {
  const isConnected = true;

  return (
    <div>
      {isConnected ? (
        <div className="flex items-center gap-[15px] cursor-pointer z-30">
          <Image
            src="/icons/eth-logo.svg"
            width="32"
            height="32"
            alt="Eth Logo"
          />

          <p className="text-[#B2B2B2]">0X57db....A17B</p>
          <Image
            src="/icons/logout.svg"
            width="18"
            height="19"
            alt="Eth Logo"
          />
        </div>
      ) : (
        <button type="button">Connect wallet</button>
      )}
    </div>
  );
};

export default ConnectWalletHeader;
