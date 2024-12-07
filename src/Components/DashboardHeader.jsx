import React, { useState } from "react";
import { LuMail, LuRefreshCw } from "react-icons/lu";
import Avatar from "./Avatar";

const DashboardHeader = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refresh = () => {
    setIsRefreshing(!isRefreshing);
  };

  return (
    <div
      className="w-full flex items-center justify-between px-3"
      style={{ fontFamily: "Parkinsans" }}
    >
      <div className="flex justify-center items-center space-x-3">
        <LuMail size={20} />
        <div className="flex justify-center items-center space-x-2">
          <h2 className="text-xl font-semibold">Mail Beacon</h2>
          <LuRefreshCw
            size={14}
            className={`text-gray-400 cursor-pointer ${
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
