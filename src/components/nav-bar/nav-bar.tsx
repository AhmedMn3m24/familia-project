"use client";
import { useState } from "react";
import { Bell, Menu, Search, Settings } from "lucide-react";
import Image from "next/image";
import flag from "../../assets/Images/usa-flag.jpg";
import arabicflag from "../../assets/Images/saudi-arabia-flag.png";
import admin from "../../assets/Images/admin.jpg";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white p-3 sm:p-4 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 w-full">
        <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
          <h1 className="font-bold italic text-lg sm:text-xl text-[#072675]">
            Lameet
          </h1>

          <Menu
            onClick={onMenuClick}
            className="bg-gray-300 p-2 rounded-md w-9 h-9 sm:w-10 sm:h-10 cursor-pointer"
          />

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />

            <input
              type="search"
              placeholder="Type text..."
              className="bg-gray-200 rounded-xl py-2 pl-10 pr-3 w-64 outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 w-full sm:w-auto">
          <div className="relative">
            <div
              className="bg-gray-200 p-2 rounded-xl cursor-pointer"
              onClick={() => setLangOpen(!langOpen)}
            >
              <Image
                src={lang === "en" ? flag : arabicflag}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm"
                alt="flag"
              />
            </div>

            {langOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-xl p-2 z-50 min-w-[80px]">
                <div
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    setLang("en");
                    setLangOpen(false);
                  }}
                >
                  <Image
                    src={flag}
                    className="w-8 h-5 rounded object-cover"
                    alt="english"
                  />
                  <span className="text-sm">EN</span>
                </div>
                <div
                  className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-100 rounded-md"
                  onClick={() => {
                    setLang("ar");
                    setLangOpen(false);
                  }}
                >
                  <Image
                    src={arabicflag}
                    className="w-8 h-5 rounded object-cover"
                    alt="arabic"
                  />
                  <span className="text-sm">AR</span>
                </div>
              </div>
            )}
          </div>
          <div className="bg-gray-200 p-2 rounded-xl cursor-pointer hover:bg-gray-300 transition">
            <Bell className="w-5 h-5" />
          </div>

          <div className="p-2 rounded-xl flex items-center">
            <Image
              src={admin}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl"
              alt="admin"
            />

            <div className="hidden md:flex flex-col ml-3">
              <span className="text-sm text-gray-500">Admin</span>
              <span className="text-sm font-semibold">Maria Gibson</span>
            </div>
          </div>

          <div className="relative">
            <div
              className="bg-gray-200 p-2 rounded-xl cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              <Settings className="w-5 h-5" />
            </div>

            {open && (
              <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-32 p-1 z-50">
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Profile
                </p>
                <p className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                  Logout
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
