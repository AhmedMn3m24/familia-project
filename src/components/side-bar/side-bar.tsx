import {
  BellPlus,
  BriefcaseBusiness,
  CalendarPlus2,
  Gift,
  House,
  ShoppingCart,
  SlidersVertical,
  Users,
} from "lucide-react";

export default function Sidebar({
  isOpen,
}: {
  isOpen: boolean;
}) {
  return (
    <div
      className={`bg-white flex h-screen rounded-2xl transition-all duration-300 overflow-hidden ${
        isOpen ? "w-64 p-5" : "w-0 p-0"
      }`}
    >
      <ul className="w-full mt-4">
        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <House />
          <span>Home</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <Users />
          <span>Users</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <BriefcaseBusiness />
          <span>Administrators</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <CalendarPlus2 />
          <span>Event</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <Gift />
          <span>Gift Catalog</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <ShoppingCart />
          <span>Orders</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <BellPlus />
          <span>Notification</span>
        </li>

        <li className="nav-hover flex items-center gap-3 p-4 cursor-pointer text-[#86909C]">
          <SlidersVertical />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
}