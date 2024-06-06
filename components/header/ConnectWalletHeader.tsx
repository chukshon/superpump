import Image from "next/image";
import React from "react";
import { MdOutlineLogout } from "react-icons/md";

const ConnectWalletHeader = () => {
  const isConnected = true;

  return (
    <>
      {isConnected ? (
        <div>
          <button
            type="button"
            className="text-neutral-0 lg:hidden text-[11px] rounded-[4px] bg-custom-radial py-[10px] px-[20px]"
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

            <p className="text-[#B2B2B2] z-30 text-[16px]">0X57db....A17B</p>
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
          className="hidden z-30 rounded-[4px] bg-custom-radial py-[10px] px-[30px]"
        >
          Connect wallet
        </button>
      )}
    </>
  );
};

export default ConnectWalletHeader;
