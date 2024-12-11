import React from "react";

const CapacityIndicator = () => {
  return (
    <div className="px-2 py-4 w-[90%] mx-auto flex flex-col items-end h-fit space-y-1">
      <div className="w-full h-2 rounded-full border border-slate-200 bg-slate-600/20"></div>
      <p className="text-[0.65rem] text-end text-gray-600">
        0 slots of 50 slots Used
      </p>
    </div>
  );
};

export default CapacityIndicator;
