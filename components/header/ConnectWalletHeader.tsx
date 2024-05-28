import Image from "next/image";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";

const ConnectWalletHeader = () => {
  const isConnected = true;

  return (
    <div>
      {isConnected ? (
        <div>
          <button
            type="button"
            className="lg:hidden rounded-[4px] bg-custom-radial py-[10px] px-[30px]"
          >
            Dashboard
          </button>

          <div className="hidden lg:flex items-center gap-[15px] cursor-pointer z-30">
            <Image
              src="/icons/eth-logo.svg"
              width="32"
              height="32"
              alt="Eth Logo"
              className="z-30"
            />

            <p className="text-[#B2B2B2] z-30">0X57db....A17B</p>
            <Image
              src="/icons/logout.svg"
              width="18"
              height="19"
              alt="Eth Logo"
            />
          </div>
        </div>
      ) : (
        <button
          type="button"
          className="z-30 rounded-[4px] bg-custom-radial py-[10px] px-[30px]"
        >
          Connect wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletHeader;
