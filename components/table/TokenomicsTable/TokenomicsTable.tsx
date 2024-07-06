"use client";

import * as React from "react";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TokenomicsType from "./cells/TokenomicsType";

const data: TokenomicsColT[] = [
  {
    id: "m5gr84i9",
    type: "Presale",
    percentage: 12,
    amount: 321321321,
  },
  {
    id: "3u1reuv4",
    type: "Liquidity",
    percentage: 8,
    amount: 321321,
  },
  {
    id: "derv1ws0",
    type: "Ecosystem",
    percentage: 8,
    amount: 321321,
  },
  {
    id: "derv2ws0",
    type: "Cex Listing/Marketing",
    percentage: 8,
    amount: 321321,
  },
];

export type TokenomicsColT = {
  id: string;
  type: string;
  percentage: number;
  amount: number;
};

export const columns: ColumnDef<TokenomicsColT>[] = [
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => <TokenomicsType type={row.getValue("percentage")} />,
  },
  {
    accessorKey: "percentage",
    header: "PERCENTAGE",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("percentage")}</div>
    ),
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => (
      <div className="capitalize min-w-[100px]">{row.getValue("amount")}</div>
    ),
  },
];

const TokenomicsTable = () => {
  return <div>TokenomicsTable</div>;
};

export default TokenomicsTable;
