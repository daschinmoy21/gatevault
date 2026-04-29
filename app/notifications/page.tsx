"use client";

import { useRouter } from "next/navigation";
import { Bell, ArrowLeft } from "lucide-react";

export default function NotificationsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">

      {/* MOBILE FRAME */}
      <div className="w-[390px] h-[844px] bg-[#f4f1ea] relative overflow-hidden rounded-[30px] shadow-2xl">

        {/* ORANGE BACKGROUND */}
        <div className="absolute bottom-[-100px] right-[-50px] w-[500px] h-[350px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-tl-[200px]" />

        {/* CARD */}
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[320px] bg-white/80 backdrop-blur-md rounded-3xl p-5 shadow-xl animate-[slideUp_0.5s_ease]">

          {/* TOP ROW */}
          <div className="flex items-center gap-2 mb-4">
            <ArrowLeft
              size={20}
              className="cursor-pointer"
              onClick={() => router.back()}
            />
            <h2 className="text-lg font-semibold">Notifications</h2>
          </div>

          {/* EMPTY STATE */}
          <div className="flex flex-col items-center justify-center mt-10 text-gray-400">
            <Bell size={40} />
            <p className="mt-3 text-sm">No notifications yet</p>
          </div>

        </div>

      </div>
    </div>
  );
}