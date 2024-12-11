import React from "react";
import { LuArrowDownUp } from "react-icons/lu";

const Sort = () => {
  return (
    <div className="px-4 flex justify-between items-center w-full text-gray-600">
      <p className="font-semibold">Sort</p>
      <LuArrowDownUp size={16} />
    </div>
  );
};

export default Sort;
