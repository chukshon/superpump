import React from "react";

const ConnectWalletMobile = () => {
  const isConnected = false;
  return (
    <div className="text-[14px]">
      {isConnected ? (
        <button
          type="button"
          className="z-30 rounded-[4px] btn-variant-one py-[10px] px-[0px]"
        >
          Dashboard
        </button>
      ) : (
        <button
          type="button"
          className="z-30 rounded-[4px] btn-variant-one py-[10px] px-[20px]"
        >
          Connect wallet
        </button>
      )}
    </div>
  );
};

export default ConnectWalletMobile;
