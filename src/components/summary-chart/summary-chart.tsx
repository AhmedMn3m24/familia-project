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
  { month: "Apr", value: 250, bg: 350 },
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
    <div
      className="
      bg-white
      rounded-[24px]
      w-full
      shadow-sm
      border border-gray-50
      flex flex-col

      p-4 sm:p-6 lg:p-10
      h-[320px] sm:h-[400px] lg:h-[470px]
    "
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-12">
        <h2 className="text-white font-bold text-lg lg:text-xl">
          Quick Summary
        </h2>

        <div className="flex flex-wrap items-center gap-2 text-sm lg:text-base font-medium">
          <button className="bg-[#00CFE8] text-white px-3 lg:px-6 py-2 rounded-lg shadow-lg">
            Year
          </button>

          <button className="text-gray-500 hover:text-cyan-500">Month</button>

          <button className="text-gray-500 hover:text-cyan-500">Week</button>

          <button className="text-gray-500 hover:text-cyan-500">Day</button>
        </div>
      </div>

      <div className="relative flex-1 w-full min-h-0">
        <div className="absolute inset-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barSize={12}>
              <CartesianGrid vertical={false} stroke="#F1F5F9" />

              <XAxis
                dataKey="month"
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
              />

              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: "#94a3b8", fontSize: 12 }}
                domain={[0, 400]}
              />

              <Bar dataKey="bg" fill="#F8FAFC" radius={[10, 10, 10, 10]} />

              <Bar dataKey="value" fill="#00CFE8" radius={[10, 10, 10, 10]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
