"use client";

import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
import useLatestTransactionSection from "./useLatestTransactionSection";

const LatestTransactionItem = () => {
  const { LatestTransactionColumns, LatestTransactionData } =
    useLatestTransactionSection();
  return (
    <UnionBorderContainer>
      <DefaultTable
        columns={LatestTransactionColumns}
        data={LatestTransactionData}
      />
    </UnionBorderContainer>
  );
};

export default LatestTransactionItem;
