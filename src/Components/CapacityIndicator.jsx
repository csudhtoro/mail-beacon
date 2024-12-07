import React from "react";

const CapacityIndicator = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col items-end h-fit space-y-1">
      <div className="w-full h-3 text-[0.65rem] text-gray-200 rounded-full border border-gray-200 bg-gradient-to-r from-gray-500 from-0% to-20% ..."></div>
      <p className="text-[0.65rem] text-end text-gray-400">
        4 slots of 50 slots Used
      </p>
    </div>
  );
};

export default CapacityIndicator;
