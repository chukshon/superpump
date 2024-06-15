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

const QuickPortfolioTableData: QuickPortfolioDataT[] = [
  {
    id: "m5gr84i9",
    token: "Link/Eth",
    price: 3122.3,
    hourChange: -122.5,
  },
  {
    id: "3u1reuv4",
    token: "Bonk/Sol",
    price: 3122.3,
    hourChange: -122.5,
  },
  {
    id: "derv1ws0",
    token: "Link/Eth",
    price: 3122.3,
    hourChange: -122.5,
  },
  {
    id: "derv2ws0",
    token: "Link/Eth",
    price: 3122.3,
    hourChange: -122.5,
  },
  {
    id: "derv5ws0",
    token: "Link/Eth",
    price: 3122.3,
    hourChange: -122.5,
  },
];

export type QuickPortfolioDataT = {
  id: string;
  token: string;
  price: number;
  hourChange: number;
};

function useMarketUpdate() {
  type MarketUpdateT = "gainers" | "losers";

  const TabData = [
    {
      label: "Gainers",
      value: "gainers",
    },
    {
      label: "Losers",
      value: "losers",
    },
  ];

  const [selectedTab, setSelectedTab] = React.useState("gainers");

  const handleSwitchTab = (tab: MarketUpdateT) => {
    setSelectedTab(tab);
  };

  let color = "";

  switch (selectedTab) {
    case "gainers":
      color = "#0ECB81";
      break;
    case "losers":
      color = "#F6465D";
      break;
  }
  const QuickPortfolioTablecolumns: ColumnDef<QuickPortfolioDataT>[] = [
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
        <div
          className={` uppercase ${
            selectedTab === "gainers" ? "text-[#0ECB81]" : "text-[#F6465D]"
          }`}
        >
          {row.getValue("token")}
        </div>
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
      cell: ({ row }) => (
        <div
          className={`${
            selectedTab === "gainers" ? "text-[#0ECB81]" : "text-[#F6465D]"
          }`}
        >
          {row.getValue("price")}
        </div>
      ),
    },
    {
      accessorKey: "hourChange",
      header: ({ column }) => {
        return (
          <button
            type="button"
            className="flex items-center"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            24H CHANGE
            <HiChevronUpDown className="h-4 w-4" size={20} strokeWidth={1.5} />
          </button>
        );
      },
      cell: ({ row }) => {
        return (
          <button
            type="button"
            className={`w-full max-w-[150px] flex items-center justify-center bg-[${color}]  h-[30px] rounded-[4px]`}
          >
            {row.getValue("hourChange")}%
          </button>
        );
      },
    },
  ];
  return {
    QuickPortfolioTableData,
    QuickPortfolioTablecolumns,
    TabData,
    color,
    handleSwitchTab,
    selectedTab,
  };
}

export default useMarketUpdate;
