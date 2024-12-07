import React from "react";

const CapacityIndicator = () => {
  return (
    <div className="w-full flex items-center justify-between space-x-2">
      <p className="text-[0.65rem]">6 / 50</p>
      <div className="flex-1 h-6 rounded-full border border-slate-200 bg-gradient-to-r from-green-300 from-0% to-8%"></div>
    </div>
  );
};

export default CapacityIndicator;
