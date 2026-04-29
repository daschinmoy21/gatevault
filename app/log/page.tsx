"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Home, Info, Settings } from "lucide-react";

const logsData = [
  {
    title: "Dinner",
    out: "17:57",
    in: "21:00",
    date: "04 April 2026",
    status: "Expired",
  },
  {
    title: "Library",
    out: "10:00",
    in: "14:00",
    date: "05 April 2026",
    status: "Approved",
  },
  {
    title: "Market",
    out: "16:00",
    in: "18:00",
    date: "06 April 2026",
    status: "Pending",
  },
];

export default function LogPage() {
  const router = useRouter();
  const path = usePathname();

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredLogs = logsData.filter((log) => {
    const matchSearch = log.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || log.status === filter;

    return matchSearch && matchFilter;
  });

  const statusColor = (status: string) => {
    if (status === "Approved") return "bg-green-500";
    if (status === "Pending") return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">

      {/* MOBILE FRAME */}
      <div className="w-[390px] h-[844px] bg-[#f4f1ea] relative overflow-hidden rounded-[30px] shadow-2xl">

        {/* 🔥 SAME ORANGE BG AS DASHBOARD */}
        <div className="absolute bottom-[-100px] right-[-50px] w-[500px] h-[350px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-tl-[200px]" />

        {/* 🔥 MAIN CARD */}
        <div className="absolute top-[12%] left-1/2 -translate-x-1/2 w-[320px] bg-white/80 backdrop-blur-md rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)] animate-[slideUp_0.6s_ease, float_4s_ease-in-out_infinite]">

          {/* TOP BLOB */}
          <div className="absolute top-0 right-0 w-16 h-14 bg-orange-400 rounded-bl-[40px]" />

          {/* TITLE */}
          <h2 className="text-lg font-semibold text-gray-800 mt-2 mb-3">
            Logs
          </h2>

          {/* 🔍 SEARCH */}
          <input
            placeholder="Search logs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full mb-3 p-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          {/* 📊 FILTERS */}
          <div className="flex gap-2 mb-4 text-xs flex-wrap">
            {["All", "Approved", "Pending", "Expired"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full transition ${
                  filter === f
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* 📋 LOG LIST */}
          <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">

            {filteredLogs.map((log, index) => (
              <div
                key={index}
                onClick={() => router.push("/pass")}
                className="flex justify-between items-center p-3 rounded-xl bg-gray-100 hover:scale-[1.02] transition cursor-pointer"
              >
                <div>
                  <p className="font-medium text-sm">{log.title}</p>
                  <p className="text-xs text-gray-500">
                    Out: {log.out}
                  </p>
                  <p className="text-xs text-gray-400">
                    {log.date}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xs text-gray-500">
                    In: {log.in}
                  </p>
                  <span
                    className={`${statusColor(
                      log.status
                    )} text-white text-xs px-2 py-1 rounded-full`}
                  >
                    {log.status}
                  </span>
                </div>
              </div>
            ))}

            {filteredLogs.length === 0 && (
              <p className="text-center text-sm text-gray-400">
                No logs found
              </p>
            )}
          </div>

        </div>

        {/* 🔥 SAME PREMIUM NAVBAR */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[320px] bg-white/80 backdrop-blur-xl rounded-2xl flex justify-around py-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">

          {/* HOME */}
          <div
            onClick={() => router.push("/dashboard")}
            className={`flex flex-col items-center cursor-pointer ${
              path === "/dashboard" ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Home size={22} />
            <p className="text-[10px]">Home</p>
          </div>

          {/* LOG */}
          <div
            className={`flex flex-col items-center ${
              path === "/log" ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Info size={22} />
            <p className="text-[10px]">Log</p>
          </div>

          {/* SETTINGS */}
          <div
            onClick={() => router.push("/settings")}
            className={`flex flex-col items-center cursor-pointer ${
              path === "/settings" ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Settings size={22} />
            <p className="text-[10px]">Settings</p>
          </div>

        </div>

      </div>
    </div>
  );
}