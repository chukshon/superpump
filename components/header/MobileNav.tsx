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
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <GiHamburgerMenu size={30} className="text-neutral-0" />
        </SheetTrigger>
        <SheetContent
          style={{ width: "calc(100% - 10%)", height: "calc(100% - 10%)" }}
          className="w-full  h-full nav-bg-gradient lg:hidden"
        ></SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
