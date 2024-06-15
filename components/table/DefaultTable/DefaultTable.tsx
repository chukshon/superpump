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
import { HiChevronUpDown } from "react-icons/hi2";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data: QuickPortfolioDataT[] = [
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

export const columns: ColumnDef<QuickPortfolioDataT>[] = [
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

export function DefaultTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table className="border-[1.5px] border-[#3B3B3B] rounded-tl-[10px] rounded-tr-[10px]">
      <TableHeader className=" bg-neutral-900 text-neutral-0 border-b-[1.5px] border-[#3B3B3B]">
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow
            key={headerGroup.id}
            className="rounded-tl-[10px] rounded-tr-[10px]"
          >
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className=" text-neutral-0 py-[5px]">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              );
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody className="bg-[#111111] px-[10px] py-[10px] ">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              className="border-b-[1px] border-neutral-0 py-[20px]"
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
