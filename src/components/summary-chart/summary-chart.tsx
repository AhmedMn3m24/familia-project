"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const barData = [
  { month: "Jan", value: 100, bg: 350 },
  { month: "Feb", value: 300, bg: 350 },
  { month: "Mar", value: 300, bg: 350 },
  { month: "Apr", value: 250  , bg: 350 },
  { month: "May", value: 200, bg: 350 },
  { month: "Jun", value: 125, bg: 350 },
  { month: "Jul", value: 180, bg: 350 },
  { month: "Aug", value: 145, bg: 350 },
  { month: "Sep", value: 185, bg: 350 },
  { month: "Oct", value: 100, bg: 350 },
  { month: "Nov", value: 125, bg: 350 },
  { month: "Dec", value: 175, bg: 350 },
];

export default function SummaryChart() {
  return (
    <div className="bg-white rounded-[24px] p-10 w-full h-[470px] shadow-sm border border-gray-50 flex flex-col">
      <div className="flex items-center justify-between mb-12 px-2">
        <h2 className="text-black font-bold text-xl">Quick Summary</h2>

        <div className="flex items-center gap-5 text-semibold font-medium">
          <button className="bg-[#00CFE8] text-white px-6 py-2 rounded-lg shadow-lg">
            Year
          </button>
          <button className="text-gray-500 hover:text-cyan-500">Month</button>
          <button className="text-gray-500 hover:text-cyan-500">Week</button>
          <button className="text-gray-500 hover:text-cyan-500">Day</button>
        </div>
      </div>

      <div className="flex-1 w-full px-4 pb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} barSize={15} barGap={-14}>
            <CartesianGrid
              vertical={false}
              stroke="#F1F5F9"
              strokeDasharray="0"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 16 }}
              dy={15}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 16 }}
              domain={[0, 400]}
              ticks={[0, 50, 100, 150, 200, 250, 300, 350, 400]}
            />

            <Bar
              dataKey="bg"
              fill="#F8FAFC"
              radius={[10, 10, 10, 10]}
              isAnimationActive={false}
            />

            <Bar dataKey="value" fill="#00CFE8" radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
