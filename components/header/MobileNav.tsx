"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import TelegramIcon from "../Icons/TelegramIcon";
import TwitterIcon from "../Icons/TwitterIcon";
import Image from "next/image";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <GiHamburgerMenu size={30} className="text-neutral-0" />
        </SheetTrigger>
        <SheetContent
          style={{ width: "calc(100% - 10%)", height: "calc(100% - 10%)" }}
          className="w-full  h-full nav-bg-gradient lg:hidden border-[0px]"
        >
          <div className="flex items-end flex-col gap-[30px]">
            <SheetPrimitive.Close>
              <Image
                src="/icons/close-icon-white.svg"
                width="30"
                height="30"
                alt="Superpump fun mobile nav close icon"
              />
            </SheetPrimitive.Close>

            <span className="flex gap-[10px]">
              <TwitterIcon className="text-neutral-0" size={25} />
              <TelegramIcon className="text-neutral-0" size={25} />
            </span>
            <ul className="flex flex-col items-end gap-[40px]">
              <li className="text-[20px] font-[500] text-neutral-0 font-space_grotesk">
                Documentations
              </li>
              <li className="text-[20px] font-[500] text-neutral-0 font-space_grotesk">
                How To's
              </li>

              <Link
                href="/token/2"
                className="text-[20px] font-[500] text-neutral-0 font-space_grotesk"
              >
                <SheetClose> Trade</SheetClose>
              </Link>

              <Link
                href="/earn"
                className="text-[20px] font-[500] text-neutral-0 font-space_grotesk"
              >
                <SheetClose> Earn</SheetClose>
              </Link>
              <Link
                href="/presale"
                className="text-[20px] font-[500] text-neutral-0 font-space_grotesk"
              >
                <SheetClose> Sale</SheetClose>
              </Link>
              <Link
                href="/earn/fomo"
                className="text-[20px] font-[500] text-neutral-0 font-space_grotesk"
              >
                <SheetClose> Vote</SheetClose>
              </Link>
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
