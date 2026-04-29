"use client";

import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Home, Info, Settings } from "lucide-react";

export default function SettingsPage() {
  const router = useRouter();
  const path = usePathname();

  // 🔐 PASSWORD STATE
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  // 📱 PHONE STATE
  const [oldPhone, setOldPhone] = useState("");
  const [newPhone, setNewPhone] = useState("");

  // 🔥 PASSWORD LOGIC
  const handlePasswordChange = () => {
    if (!oldPass || !newPass || !confirmPass) {
      alert("Please fill all fields");
      return;
    }

    if (newPass !== confirmPass) {
      alert("Passwords do not match");
      return;
    }

    if (newPass.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    alert("Password changed successfully (demo)");
  };

  // 🔥 PHONE LOGIC
  const handlePhoneChange = () => {
    if (!oldPhone || !newPhone) {
      alert("Please fill both phone fields");
      return;
    }

    if (oldPhone.length !== 10 || newPhone.length !== 10) {
      alert("Phone number must be 10 digits");
      return;
    }

    if (oldPhone === newPhone) {
      alert("New phone must be different");
      return;
    }

    alert("Phone updated successfully (demo)");
  };

  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">

      {/* MOBILE FRAME */}
      <div className="w-[390px] h-[844px] bg-[#f4f1ea] relative overflow-hidden rounded-[30px] shadow-2xl">

        {/* 🔥 BACKGROUND */}
        <div className="absolute bottom-[-100px] right-[-50px] w-[500px] h-[350px] bg-gradient-to-r from-orange-400 to-orange-600 rounded-tl-[200px]" />

        {/* 🔥 MAIN CARD */}
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[320px] bg-white/80 backdrop-blur-md rounded-3xl p-5 shadow-[0_10px_40px_rgba(0,0,0,0.1)]">

          {/* TOP BLOB */}
          <div className="absolute top-0 right-0 w-16 h-14 bg-orange-400 rounded-bl-[40px]" />

          {/* TITLE */}
          <h2 className="text-lg font-semibold text-gray-800 mt-2">
            Settings
          </h2>

          {/* ================= PASSWORD ================= */}
          <p className="text-xs text-gray-500 mt-3 mb-3">
            Change your password
          </p>

          <input
            type="password"
            placeholder="Old Password"
            value={oldPass}
            onChange={(e) => setOldPass(e.target.value)}
            className="w-full mb-3 p-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <input
            type="password"
            placeholder="New Password"
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
            className="w-full mb-3 p-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button
            onClick={handlePasswordChange}
            className="w-full mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 rounded-xl font-medium shadow-md hover:scale-105 active:scale-95 transition"
          >
            Change Password 
          </button>

          {/* ================= PHONE ================= */}
          <p className="text-xs text-gray-500 mt-6 mb-3">
            Change phone number
          </p>

          <input
            type="text"
            placeholder="Old Phone Number"
            value={oldPhone}
            onChange={(e) => setOldPhone(e.target.value)}
            className="w-full mb-3 p-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <input
            type="text"
            placeholder="New Phone Number"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
            className="w-full p-3 rounded-xl bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-orange-300"
          />

          <button
            onClick={handlePhoneChange}
            className="w-full mt-4 bg-gradient-to-r from-orange-400 to-orange-600 text-white py-3 rounded-xl font-medium shadow-md hover:scale-105 active:scale-95 transition"
          >
            Update Phone 
          </button>

        </div>

        {/* 🔥 NAVBAR */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[320px] bg-white/80 backdrop-blur-xl rounded-2xl flex justify-around py-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)]">

          <div
            onClick={() => router.push("/dashboard")}
            className={`flex flex-col items-center cursor-pointer ${
              path === "/dashboard" ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Home size={22} />
            <p className="text-[10px]">Home</p>
          </div>

          <div
            onClick={() => router.push("/log")}
            className={`flex flex-col items-center cursor-pointer ${
              path === "/log" ? "text-orange-500" : "text-gray-400"
            }`}
          >
            <Info size={22} />
            <p className="text-[10px]">Log</p>
          </div>

          <div className="flex flex-col items-center text-orange-500">
            <Settings size={22} />
            <p className="text-[10px] font-medium">Settings</p>
          </div>

        </div>

      </div>
    </div>
  );
}
