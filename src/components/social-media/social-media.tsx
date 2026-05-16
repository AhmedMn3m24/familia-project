import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const socialSalesData = [
  {
    id: 1,
    name: "Facebook Ads",
    sales: "3.2k",
    likes: "4.2k",
    percentage: "50%",
    isUp: true,
    color: "bg-indigo-600",
    icon: FaFacebook,
  },
  {
    id: 2,
    name: "Twitter Ads",
    sales: "3.1k",
    likes: "3.7k",
    percentage: "45%",
    isUp: true,
    color: "bg-sky-400",
    icon: FaTwitter,
  },
  {
    id: 3,
    name: "Linkedin Ads",
    sales: "4.3k",
    likes: "4.3k",
    percentage: "30%",
    isUp: false,
    color: "bg-blue-600",
    icon: FaLinkedin,
  },
  {
    id: 4,
    name: "Youtube Ads",
    sales: "4.2k",
    likes: "3.7k",
    percentage: "36%",
    isUp: true,
    color: "bg-rose-500",
    icon: FaYoutube,
  },
  {
    id: 5,
    name: "GitHub Ads",
    sales: "4.5k",
    likes: "4.1k",
    percentage: "40%",
    isUp: true,
    color: "bg-slate-800",
    icon: FaGithub,
  },
];

export default function Social() {
  return (
    <div className="w-full bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 h-full">
      <h2 className="text-lg font-bold text-gray-800 mb-8">
        Sales By Social Source
      </h2>

      <div className="space-y-7">
        {socialSalesData.map((item) => {
          const Icon = item.icon;

          return (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div
                  className={`${item.color} w-11 h-11 rounded-xl flex items-center justify-center shadow-sm`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-gray-700 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium mt-0.5">
                    {item.sales} Sale - {item.likes} Like
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-gray-600">
                  {item.percentage}
                </span>
                {item.isUp ? (
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-rose-400" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
