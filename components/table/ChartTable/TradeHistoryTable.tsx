"use client";

import React from "react";
import Tabs from "./Tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
    timestamp: "string",
    type: "string",
    priceUsd: 20,
    priceFtm: 20,
    totalUsd: 20,
    maker: "string",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
    timestamp: "string",
    type: "string",
    priceUsd: 20,
    priceFtm: 20,
    totalUsd: 20,
    maker: "string",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    timestamp: "string",
    type: "string",
    priceUsd: 20,
    priceFtm: 20,
    totalUsd: 20,
    maker: "string",
  },
  {
    id: "derv2ws0",
    amount: 839,
    status: "processing",
    email: "Monserrat44@gmail.com",
    timestamp: "string",
    type: "string",
    priceUsd: 20,
    priceFtm: 20,
    totalUsd: 20,
    maker: "string",
  },
  {
    id: "derv5ws0",
    amount: 537,
    status: "processing",
    email: "Monserrat44@gmail.com",
    timestamp: "string",
    type: "string",
    priceUsd: 20,
    priceFtm: 20,
    totalUsd: 20,
    maker: "string",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
  timestamp: string;
  type: string;
  priceUsd: number;
  priceFtm: number;
  totalUsd: number;
  maker: string;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "timestamp",
    header: "TIMESTAMP",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("timestamp")}</div>
    ),
  },
  {
    accessorKey: "type",
    header: "TYPE",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },
  {
    accessorKey: "priceUsd",
    header: "PRICE USD",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("priceUsd")}</div>
    ),
  },
  {
    accessorKey: "priceFtm",
    header: "PRICE FTM",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("priceFtm")}</div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
];

const TradeHistoryTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <Table className="w-[100%] bg-neutral-900">
      {/* Table Header */}
      <TableHeader className="border-r-[0px] border-l-[0px] border-b-[1px] lg:border-l-[1px] lg:border-r-[1px] border-red-400 py-[10px]  px-[10px]">
        {/* Tabs */}
        {/* <div className="my-[10px]">
          <Tabs />
        </div> */}
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className="text-neutral-0">
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
      <TableBody className="bg-neutral-900 text-neutral-0">
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
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

export default TradeHistoryTable;
