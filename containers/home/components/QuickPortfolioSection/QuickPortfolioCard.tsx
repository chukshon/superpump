import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import Image from "next/image";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
import Link from "next/link";

const QuickPortfolioCard = () => {
  return (
    <div className="w-full">
      <UnionBorderContainer>
        <div className="flex items-start gap-[80px]">
          <div className="flex items-start lg:items-center">
            <Image
              src="/images/user.png"
              alt="brown-rectangle-bg"
              width="100"
              height="100"
              className="object-contain ml-[-10px]"
            />
            <div>
              <div>
                <h1 className="text-[12px] lg:text-[16px] w-max">
                  Current Balance
                </h1>
                <p>$ 1,233.23</p>
              </div>
              <div className="lg:mt-[10px] w-max">
                <Link href="manage-porfolio" className="underline w-max">
                  Manage Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:mt-[10px]">
            <p className="text-[12px] lg:text-[16px]">PNL:</p>
            <p className="text-[#24FF00] text-[12px] lg:text-[16px]">
              +$123.23
            </p>
          </div>
        </div>
        <div className="mt-[30px]">
          <DefaultTable />
        </div>
      </UnionBorderContainer>
    </div>
  );
};

export default QuickPortfolioCard;
