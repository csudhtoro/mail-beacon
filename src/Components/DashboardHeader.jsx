import React, { useState } from "react";
import { LuMail, LuRefreshCw } from "react-icons/lu";
import Avatar from "./Avatar";

const DashboardHeader = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = () => {
    setIsRefreshing(!isRefreshing);
  };

  return (
    <div className="bg-white w-full flex items-center justify-between px-6 py-4 border border-b-slate-300">
      <div className="flex justify-center items-center space-x-3">
        <div className="flex justify-center items-center space-x-2">
          <h2
            className="text-2xl text-indigo-500/90"
            style={{ fontFamily: "ChelaOne" }}
          >
            Mail Beacon
          </h2>
          <LuRefreshCw
            size={14}
            className={`text-slate-600 cursor-pointer ${
              isRefreshing && "animate-spin"
            }`}
            onClick={() => refresh()}
          />
        </div>
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default DashboardHeader;
