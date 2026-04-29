"use client";

export default function StatusCard() {
  return (
    <div className="min-h-screen bg-[#f4f1ea] flex items-center justify-center">

      {/* FRAME */}
      <div className="w-[390px] h-[844px] relative overflow-hidden rounded-[30px] shadow-2xl bg-[#f4f1ea]">

        {/* ORANGE BACKGROUND */}
        <div className="absolute bottom-[-120px] right-[-60px] w-[520px] h-[380px] 
        bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 
        rounded-tl-[220px]" />

        {/* CARD */}
        <div className="absolute top-[14%] left-1/2 -translate-x-1/2 w-[330px] 
        bg-white/80 backdrop-blur-xl border border-white/50 
        rounded-3xl p-6 shadow-[0_20px_60px_rgba(0,0,0,0.15)]
        transition-all duration-300 hover:scale-[1.01]">

          {/* TOP BLOB */}
          <div className="absolute top-0 right-0 w-16 h-14 bg-orange-400 rounded-bl-[40px]" />

          {/* TITLE */}
          <p className="text-center text-xs tracking-wide text-gray-500">
            STUDENT STATUS
          </p>

          {/* PROFILE */}
          <div className="flex flex-col items-center mt-4">
            <div className="w-20 h-20 rounded-full 
              bg-gray-100 border-4 border-orange-400 
              flex items-center justify-center text-lg shadow-md">
              B
            </div>

            <p className="mt-3 font-semibold text-gray-800 text-sm">
              Bhupendra Jogi
            </p>

            <p className="text-xs text-gray-500">
              UNIV2026
            </p>
          </div>

          {/* STATUS */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center gap-2 
              bg-green-100 text-green-600 
              px-4 py-2 rounded-full text-xs font-semibold shadow-sm">

              <span className="w-2 h-2 bg-green-500 rounded-full animate-ping"></span>
              IN HOSTEL
            </div>
          </div>

          {/* 🔥 4 BLOCK GRID */}
          <div className="mt-6 grid grid-cols-2 gap-4">

            {/* SINCE */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl 
              shadow-sm hover:shadow-md hover:-translate-y-1 
              transition-all duration-300 active:scale-95">
              <p className="text-[10px] text-gray-500">Since</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                5:30 PM
              </p>
            </div>

            {/* ACTIVITY */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl 
              shadow-sm hover:shadow-md hover:-translate-y-1 
              transition-all duration-300 active:scale-95">
              <p className="text-[10px] text-gray-500">Activity</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                Walking
              </p>
            </div>



            {/* BATTERY */}
            <div className="bg-white/60 backdrop-blur-md p-4 rounded-xl 
              shadow-sm hover:shadow-md hover:-translate-y-1 
              transition-all duration-300 active:scale-95">
              <p className="text-[10px] text-gray-500">Battery</p>
              <p className="text-sm font-semibold text-gray-800 mt-1">
                82%
              </p>

              <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div className="h-2 bg-green-500 rounded-full w-[82%] transition-all duration-500"></div>
              </div>
            </div>

          </div>

          {/* FOOTER */}
          <p className="text-center text-[10px] text-gray-400 mt-5">
            Live tracking • GateVault Verified
          </p>

        </div>
      </div>
    </div>
  );
}