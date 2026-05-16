"use client";
import { MenuIcon, Settings } from "lucide-react";
import React from "react";
import { useState } from "react";

export default function Menubar() {
  const [open, setIsopen] = useState(false);

  return (
    <>
      <div className="relative">
        <div onClick={() => setIsopen(!open)} className="bg-blue-500">
          <Settings className="w-5 h-5" />
        </div>

        {open && (
          <div>
            <h1 className="bg-gray-600 text-sm">profile</h1>
            <h1 className="bg-gray-600 text-sm">logOut</h1>
          </div>
        )}
      </div>
    </>
  );
}
