"use client";
import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Presale", value: 120 },
  { name: "Liquidity", value: 80 },
  { name: "Ecosystem", value: 50 },
  { name: "CEX LISTINGS/MARKETING", value: 30 },
];

const COLORS = ["#0094FF", "#BDF4D3", "#FFC700", "#8000FF"];

const PresalePieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={1000} height={600}>
        <Tooltip />
        <Pie data={data} cx="50%" cy="50%" outerRadius={150} dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PresalePieChart;
