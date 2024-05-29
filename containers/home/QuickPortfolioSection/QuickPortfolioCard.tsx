import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import Image from "next/image";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
import Link from "next/link";

const QuickPortfolioCard = () => {
  return (
    <UnionBorderContainer>
      <div className="bg-[url('/images/brown-rectangle.svg')] max-w-[474px] min-h-[330px] object-cover bg-no-repeat px-[40px] py-[15px]">
        <div className="flex items-start gap-[80px]">
          <div className="flex items-center">
            <Image
              src="/images/user.png"
              alt="brown-rectangle-bg"
              width="100"
              height="100"
              className="object-contain ml-[-10px]"
            />
            <div>
              <div>
                <h1>Current Balance</h1>
                <p>$ 1,233.23</p>
              </div>
              <div className="mt-[10px]">
                <Link href="manage-porfolio" className="underline">
                  Manage Portfolio
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-[10px]">
            <p>PNL:</p>
            <p className="text-[#24FF00]">+$123.23</p>
          </div>
        </div>
        <DefaultTable />
      </div>
    </UnionBorderContainer>
  );
};

export default QuickPortfolioCard;
