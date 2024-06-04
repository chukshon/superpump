import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
import Image from "next/image";

const LeaderBoardItem = () => {
  return (
    <UnionBorderContainer>
      <DefaultTable />
    </UnionBorderContainer>
  );
};

export default LeaderBoardItem;
