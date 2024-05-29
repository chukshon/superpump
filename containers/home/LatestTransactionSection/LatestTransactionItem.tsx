import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";

const LatestTransactionItem = () => {
  return (
    <UnionBorderContainer>
      <div className="bg-[url('/images/brown-rectangle.svg')] max-w-[474px] min-h-[330px] object-cover bg-no-repeat px-[40px] py-[35px]">
        <DefaultTable />
      </div>
    </UnionBorderContainer>
  );
};

export default LatestTransactionItem;
