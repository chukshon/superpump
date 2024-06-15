import React from "react";
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

const LatestTransactionData: LatestTransactionT[] = [
  {
    id: "m5gr84i9",
    timeStamp: "May 22 10:24:56 AM",
    token: "Link/Eth",
    account: "0x123...abc",
    pnl: -122.5,
    tx: "buy",
  },
  {
    id: "3u1reuv4",
    timeStamp: "May 22 10:24:56 AM",
    token: "Link/Eth",
    account: "0x123...abc",
    pnl: -122.5,
    tx: "sell",
  },
  {
    id: "derv1ws0",
    timeStamp: "May 22 10:24:56 AM",
    token: "Link/Eth",
    account: "0x123...abc",
    pnl: -122.5,
    tx: "sell",
  },
  {
    id: "derv2ws0",
    timeStamp: "May 22 10:24:56 AM",
    token: "Link/Eth",
    account: "0x123...abc",
    pnl: -122.5,
    tx: "buy",
  },
  {
    id: "derv5ws0",
    timeStamp: "May 22 10:24:56 AM",
    token: "Link/Eth",
    account: "0x123...abc",
    pnl: -122.5,
    tx: "sell",
  },
];

export type LatestTransactionT = {
  id: string;
  timeStamp: string;
  token: string;
  pnl: number;
  account: string;
  tx: string;
};

function useLatestTransactionSection() {
  const LatestTransactionColumns: ColumnDef<LatestTransactionT>[] = [
    {
      accessorKey: "timeStamp",
      header: ({ column }) => {
        return (
          <button
            type="button"
            className="flex items-center uppercase"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Timestamp
            <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
          </button>
        );
      },
      cell: ({ row }) => (
        <div className="">
          <p>May 22</p>
          <p>10:24:56 AM</p>
        </div>
      ),
    },
    {
      accessorKey: "tx",
      header: ({ column }) => {
        return (
          <button
            type="button"
            className="flex items-center uppercase"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Tx
            <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
          </button>
        );
      },
      cell: ({ row }) => (
        <div
          className={`font-[700] text-[15px] text-center ${
            row.getValue("tx") === "buy" ? "text-[#0ECB81]" : "text-[#F6465D]"
          }`}
        >
          {row.getValue("tx") === "buy" ? "B" : "S"}
        </div>
      ),
    },

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
      cell: ({ row }) => <div>{row.getValue("token")}</div>,
    },
    {
      accessorKey: "account",
      header: ({ column }) => {
        return (
          <button
            type="button"
            className="flex items-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Account
            <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
          </button>
        );
      },
      cell: ({ row }) => <div>{row.getValue("account")}</div>,
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
      cell: ({ row }) => <div>{row.getValue("pnl")}</div>,
    },
  ];

  return { LatestTransactionData, LatestTransactionColumns };
}

export default useLatestTransactionSection;
