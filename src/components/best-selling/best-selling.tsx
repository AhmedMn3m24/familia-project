import React from "react";
import shirt from "../../assets/Images/T-Shirt.png";
import Image from "next/image";

export default function BestSellingProduct() {
  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 h-full w-full">
        <h2 className="text-gray-700 text-lg font-medium mb-6">
          Best Selling Product
        </h2>

        <div className="flex gap-4">
          <div className="w-1/3">
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-2">
              <Image
                src={shirt}
                className="w-16 h-16 object-contain"
                alt="t-shirt"
              />
            </div>
          </div>

          <div className="w-2/3 flex flex-col justify-between">
            <div>
              <p className="text-gray-500 text-sm mb-1">T-shirt</p>
              <h3 className="text-blue-400 text-xl font-semibold mb-3">
                Blue T-shirt
              </h3>
            </div>

            <div className="bg-slate-50 rounded-2xl flex items-stretch overflow-hidden">
              <button className="bg-[#00D1E0] text-white font-bold py-4 px-4 text-sm flex-1 transition-hover hover:bg-cyan-500 leading-tight">
                Buy <br /> Now
              </button>

              <div className="flex flex-[2] justify-around items-center px-2 py-2">
                <div className="text-center">
                  <p className="text-gray-700 font-bold text-base">250</p>
                  <p className="text-gray-400 text-xs mt-1">Stock</p>
                </div>
                <div className="text-center">
                  <p className="text-gray-700 font-bold text-base">800</p>
                  <p className="text-gray-400 text-xs mt-1">Sold</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
