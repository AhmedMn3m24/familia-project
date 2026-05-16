"use client";

import React from "react";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  XAxis,
} from "recharts";

const data = [
  { time: "6am", value: 3200 },
  { time: "8am", value: 4800 },
  { time: "10am", value: 3900 },
  { time: "12pm", value: 6200 },
  { time: "2pm", value: 5100 },
  { time: "4pm", value: 7800 },
  { time: "6pm", value: 6500 },
  { time: "8pm", value: 8900 },
  { time: "10pm", value: 14235 },
];

const options = [ "Week", "Month"];

export default function RevenueStats() {
  return (
<div className="bg-white shadow-xl  rounded-3xl p-5 h-full w-full">
      <div className="flex items-start justify-between mb-5">

        <div>
          <p className="text-sm text-gray-400">Revenue Statistics</p>
          <h1 className="text-2xl font-bold text-black mt-1">$14,235</h1>
        </div>

        <div className="relative group">

          <button className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-xs text-gray-500 bg-white focus:outline-none ">
            <svg
              className="w-3 h-3 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            Today
          </button>

          <div className="
            absolute right-0 mt-1.5 bg-white border border-gray-100
            rounded-2xl shadow-lg z-10 overflow-hidden min-w-[90px]
            opacity-0 pointer-events-none scale-95
            group-focus-within:opacity-100 group-focus-within:pointer-events-auto group-focus-within:scale-100
            transition-all duration-150 origin-top-right
          ">
            {options.map((opt) => (
              <button
                key={opt}
                className="w-full text-left px-4 py-2 text-xs text-gray-600 hover:bg-cyan-50 hover:text-cyan-500 transition-colors"
              >
                {opt}
              </button>
            ))}
          </div>

        </div>
      </div>

      <div className="h-32">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%"  stopColor="#06b6d4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}   />
              </linearGradient>
            </defs>

            <XAxis dataKey="time" hide />
            <Tooltip cursor={false} />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#06b6d4"
              strokeWidth={3}
              fill="url(#gradient)"
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}