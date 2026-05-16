"use client";

import { useState, ReactNode } from "react";

import Navbar from "../nav-bar/nav-bar";
import Sidebar from "../side-bar/side-bar";
import Dashboardbg from "../dashboard-bg/dashboard-bg";

type SidebarWrapperProps = {
  children: ReactNode;
};

export default function SidebarWrapper({
  children,
}: SidebarWrapperProps) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Navbar onMenuClick={() => setIsOpen(!isOpen)} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={isOpen} />

        <main className="flex-1 p-2 overflow">
          <Dashboardbg />
          {children}
        </main>
      </div>
    </>
  );
}