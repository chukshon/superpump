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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    cell: ({ row }) => <TokenomicsType type={row.getValue("type")} />,
  },
  {
    accessorKey: "percentage",
    header: "PERCENTAGE",
    cell: ({ row }) => (
      <div className="capitalize text-neutral-0">
        {row.getValue("percentage")}%
      </div>
    ),
  },
  {
    accessorKey: "amount",
    header: "AMOUNT",
    cell: ({ row }) => (
      <div className="capitalize text-neutral-0">{row.getValue("amount")}</div>
    ),
  },
];

const TokenomicsTable = () => {
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
    <Table className="">
      <TableHeader className="  text-neutral-0">
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
              className="border-b-[1px] border-[#13191F] py-[20px]"
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
};

export default TokenomicsTable;
