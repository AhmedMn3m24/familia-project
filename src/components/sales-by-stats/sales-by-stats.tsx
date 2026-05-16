import Image from "next/image";
import React from "react";
import WorldMap from "../../assets/Images/maping.png";

export default function GeoSalesCard() {
  const progressData = [
    { label: "USA", value: "75" },
    { label: "Russia", value: "55" },
    { label: "Australia", value: "85" },
  ];

  return (
    <div className="bg-white w-full h-full rounded-3xl shadow-lg p-6 flex flex-col gap-6 text-slate-700">
      <h2 className="text-xl font-medium px-2">Sales by State</h2>

      <div className="relative w-full h-40 mt-4">
        <Image
          className="w-full h-full object-contain opacity-50"
          src={WorldMap}
          alt="map"
        />
        <div className="absolute top-0 left-0 flex flex-col gap-1">
          <span className="bg-gray-800 text-white w-5 h-5 flex items-center justify-center rounded text-xs cursor-pointer">
            +
          </span>
          <span className="bg-gray-800 text-white w-5 h-5 flex items-center justify-center rounded text-xs cursor-pointer">
            -
          </span>
        </div>
      </div>

      <div className="space-y-6 px-2">
        {progressData.map((item, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="flex text-sm font-medium">
              <span>
                {item.label} {item.value}%
              </span>
            </div>
            <div className="w-full rounded-full">
              <div
                className="bg-[#00CFE8] h-[6px] rounded-full transition-all duration-500"
                style={{ width: `${item.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}