"use client";
import LiquidStakingModal from "@/components/Modals/LiquidStakingModal";
import { useModalContext } from "@/context/ModalContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const EarnTopBar = () => {
  const { showModal } = useModalContext();
  const pathname = usePathname();
  const isActive = false;

  return (
    <div className="text-neutral-0 border-b-[1px] border-[#828282] py-[10px]">
      <ul className="flex justify-center gap-[30px] font-[700]">
        <Link
          href="/earn"
          className={`${
            pathname === "/earn" ? "text-[#47A7FF]" : "text-neutral-0"
          }  text-[15px]`}
        >
          Earn
        </Link>
        <Link
          href="earn/fomo"
          className={`${
            pathname === "/earn/fomo" ? "text-[#47A7FF]" : "text-neutral-0"
          }  text-[15px]`}
        >
          The Fomo
        </Link>
        <button
          type="button"
          onClick={() => {
            showModal(<LiquidStakingModal />);
          }}
        >
          Liquid staking
        </button>
      </ul>
    </div>
  );
};

export default EarnTopBar;
