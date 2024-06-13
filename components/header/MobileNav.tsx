import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
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

const MobileNav = () => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <GiHamburgerMenu size={30} className="text-neutral-0" />
        </SheetTrigger>
        <SheetContent className="w-full max-w-[400px] max-h-[600px]  h-full bg-[#304156]">
          {/* Body */}
          <div className="">
            <h1>hello</h1>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
