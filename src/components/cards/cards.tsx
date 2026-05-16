"use client";

import {
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import {
  Users,
  Clock,
  Activity,
  Megaphone,
} from "lucide-react";

const cardsData = [
  { id: 1, value: "24000", title: "Sessions", icon: Users, iconBg: "bg-purple-100", badge: null },
  { id: 2, value: "00.18", title: "Avg Sessions", icon: Clock, iconBg: "bg-pink-100",  badge: "Active" },
  { id: 3, value: "$2400", title: "Bounce Rate", icon: Activity, iconBg: "bg-green-100", badge: null },
  { id: 4, value: "85000", title: "Goal Completions", icon: Megaphone, iconBg: "bg-orange-100",  badge: "-2%"},
];

const waveData = [
  { value: 20 },
  { value: 50 },
  { value: 25 },
  { value: 65 },
  { value: 30 },
  { value: 70 },
  { value: 40 },
  { value: 75 },
  { value: 45 },
  { value: 60 },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-2 gap-3 w-full">
      {cardsData.map((item) => (
        <div
          key={item.id}
           className="bg-white w-[193.5px] h-[234px] rounded p-4 shadow"

        >
          <div className="w-full flex justify-between items-center">
            <div className={`p-2 rounded-xl ${item.iconBg}`}>
              <item.icon size={20} />
            </div>
            {item.badge && (
              <span className="text-xs font-medium text-green-500 bg-green-100 px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>

          {/* Chart */}
          <div className="w-full h-24">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={waveData}>
                <CartesianGrid
                  stroke="#A9B39B4D"
                  strokeDasharray="3 3"
                />
                <Line
                  type="monotoneX"
                  dataKey="value"
                  stroke=" #A9B39B4D"
                  strokeWidth={2}
                  dot={false}
                  isAnimationActive={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Text */}
          <div className="w-full flex flex-col items-start">
            <span className="text-lg font-bold">{item.value}</span>
            <h4 className="text-sm text-gray-500">{item.title}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}