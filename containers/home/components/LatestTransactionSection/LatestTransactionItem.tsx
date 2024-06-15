"use client";

import React from "react";
import UnionBorderContainer from "@/components/ui/UnionBorderContainer";
import { DefaultTable } from "@/components/table/DefaultTable/DefaultTable";
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
import { HiChevronUpDown } from "react-icons/hi2";

const QuickPortfolioTableData: QuickPortfolioDataT[] = [
  {
    id: "m5gr84i9",
    token: "Link/Eth",
    price: 3122.3,
    pnl: 122.5,
  },
  {
    id: "3u1reuv4",
    token: "Bonk/Sol",
    price: 3122.3,
    pnl: 122.5,
  },
  {
    id: "derv1ws0",
    token: "Link/Eth",
    price: 3122.3,
    pnl: 122.5,
  },
  {
    id: "derv2ws0",
    token: "Link/Eth",
    price: 3122.3,
    pnl: 122.5,
  },
  {
    id: "derv5ws0",
    token: "Link/Eth",
    price: 3122.3,
    pnl: 122.5,
  },
];

export type QuickPortfolioDataT = {
  id: string;
  token: string;
  price: number;
  pnl: number;
};

export const QuickPortfolioTablecolumns: ColumnDef<QuickPortfolioDataT>[] = [
  {
    accessorKey: "token",
    header: ({ column }) => {
      return (
        <button
          type="button"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Token
          <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
        </button>
      );
    },
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("token")}</div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <button
          type="button"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
        </button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("price")}</div>,
  },
  {
    accessorKey: "pnl",
    header: ({ column }) => {
      return (
        <button
          type="button"
          className="flex items-center"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pnl
          <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
        </button>
      );
    },
    cell: ({ row }) => {
      return <div className="font-medium">{row.getValue("pnl")}</div>;
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <ul className="text-right font-medium uppercase flex items-center gap-[10px]">
          <li className="flex items-center justify-center bg-[#0ECB81] w-[24px] h-[25px] rounded-[4px]">
            B
          </li>
          <li className="flex items-center justify-center bg-[#F6465D] w-[24px] h-[25px] rounded-[4px]">
            S
          </li>
        </ul>
      );
    },
  },
];

const LatestTransactionItem = () => {
  return (
    <UnionBorderContainer>
      <DefaultTable
        columns={QuickPortfolioTablecolumns}
        data={QuickPortfolioTableData}
      />
    </UnionBorderContainer>
  );
};

export default LatestTransactionItem;
