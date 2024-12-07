import React from "react";
import { LuMail } from "react-icons/lu";
import Avatar from "./Avatar";

const DashboardHeader = () => {
  return (
    <div
      className="w-full flex items-center justify-between border-b border-slate-200 pb-3"
      style={{ fontFamily: "Parkinsans" }}
    >
      <div className="flex justify-center items-center space-x-3">
        <LuMail size={20} />
        <h2 className="text-xl font-bold">Mail Beacon</h2>
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default DashboardHeader;
