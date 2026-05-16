import { FileText, UserPlus, ChevronDown } from "lucide-react";

export default function RecentEvents() {
  const events = [
    {
      id: 1,
      type: "order",
      title: "NEW ORDER 5M AGO",
      icon: <FileText size={16} className="text-orange-400" />,
      iconBg: "bg-orange-100",
      details: (
        <>
          <span className="text-blue-400">#123456</span> from{" "}
          <span className="text-blue-400">Chris</span> for{" "}
          <span className="text-blue-400">$53.00</span>
        </>
      ),
    },
    {
      id: 2,
      type: "customer",
      title: "NEW CUSTOMER 10M AGO",
      icon: <UserPlus size={16} className="text-orange-400" />,
      iconBg: "bg-orange-100",
      details: (
        <>
          <span className="text-blue-400">John Doe</span> from Canada
        </>
      ),
    },
    {
      id: 3,
      type: "order",
      title: "NEW ORDER 35M AGO",
      icon: <FileText size={16} className="text-orange-400" />,
      iconBg: "bg-orange-100",
      details: (
        <>
          <span className="text-blue-400">#123455</span> from Tom for{" "}
          <span className="text-blue-400">$500.00</span>
        </>
      ),
    },
    {
      id: 4,
      type: "customer",
      title: "NEW CUSTOMER 40M AGO",
      icon: <UserPlus size={16} className="text-orange-400" />,
      iconBg: "bg-orange-100",
      details: <>Thomas Muller from Germany</>,
    },
    {
      id: 5,
      type: "order",
      title: "NEW ORDER 55M AGO",
      icon: <FileText size={16} className="text-orange-400" />,
      iconBg: "bg-orange-100",
      details: (
        <>
          <span className="text-blue-400">#123454</span> from Sarah for{" "}
          <span className="text-blue-400">$483.00</span>
        </>
      ),
    },
  ];

  return (
<div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6 h-full w-full">
          <div className="flex justify-between items-center mb-6">
        <h2 className="text-gray-800 text-lg font-bold">Recent events</h2>
        <button className="flex items-center text-gray-500 text-sm hover:text-gray-700 transition-colors">
          This week <ChevronDown size={16} className="ml-1" />
        </button>
      </div>

      <div className="space-y-1">
        {events.map((event, index) => (
          <div
            key={event.id}
            className={`flex items-start gap-4 py-4 ${
              index !== events.length - 1 ? "border-b border-gray-50" : ""
            }`}
          >
            <div
              className={`${event.iconBg} p-2 rounded-lg flex items-center justify-center shrink-0`}
            >
              {event.icon}
            </div>

            {/* Content */}
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                {event.title}
              </span>

              <p className="text-sm font-semibold text-slate-500">
                {event.details}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-right">
        <button className="text-black text-sm font-medium hover:text-gray-800">
          See all
        </button>
      </div>
    </div>
  );
}
