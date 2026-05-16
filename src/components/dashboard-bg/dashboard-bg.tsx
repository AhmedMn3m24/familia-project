import { ChevronRight } from "lucide-react";
import React from "react";

export default function Dashboardbg() {
  return (
  <div className="w-full h-48 p-6 pt-10 bg-[linear-gradient(92.93deg,#F652EE_-27.74%,#0AD1E3_79.12%,#F6C174_114.58%)]">
  <h1 className="text-[#FFFFFF]">DASHBOARD</h1>
  <h4 className="flex gap-2 text-[#FFFFFF]">
    Home <ChevronRight className="mt-1.5" size={15} /> Dashboard
  </h4>
</div>
  );
}
