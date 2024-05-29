import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import Image from "next/image";
import React from "react";

const QuickPortfolio = () => {
  return (
    <div className="w-[474px] h-[330px]">
      <h1 className="text-center text-[40px] font-[600]">Quick Portfolio</h1>
      <UnionBorderContainer>
        <div className="bg-[url('/images/brown-rectangle.svg')] max-w-[474px] h-[330px] object-cover bg-no-repeat px-[40px] py-[15px]">
          <div className="flex items-start gap-[80px]">
            <div className="flex items-center">
              <Image
                src="/images/user.png"
                alt="brown-rectangle-bg"
                width="100"
                height="100"
                className="object-contain"
              />
              <div>
                <span>
                  <h1>Current Balance</h1>
                  <p>$1,233.23</p>
                </span>
                <p className="mt-[10px]">Manage Portfolio</p>
              </div>
            </div>
            <div className="mt-[10px]">
              <p>Pnl:</p>
              <p className="text-[#24FF00]">+$ 123</p>
            </div>
          </div>
          <DefaultTable />
          {/* <div className="bg-neutral-900 h-[170px] max-w-[474px]"></div> */}
        </div>
      </UnionBorderContainer>
    </div>
  );
};

export default QuickPortfolio;
