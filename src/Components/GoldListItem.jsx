import React from "react";
import { LuPinOff, LuPin, LuArrowRight } from "react-icons/lu";

const GoldListItem = ({ item, isExpanded, onExpand }) => {
  return (
    <li
      key={item.email}
      className={`bg-white border border-slate-200 flex justify-between gap-x-6 p-5 hover:bg-slate-100/80 rounded-lg  cursor-pointer transition-all duration-400 ease-in-out ${
        isExpanded
          ? "h-fit bg-slate-300/30 py-4 scale-105 shadow-md"
          : "h-24 py-1 shadow-sm"
      }`}
      onClick={() => onExpand(item.email)}
    >
      <div className="w-full flex flex-col items-start space-y-1">
        <div
          className={`w-full mb-2 flex justify-between items-center border-b border-slate-200 pb-3 ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-center items-center space-x-2">
            <p className={`text-xs text-gray-500`}>{item.provider}</p>
            <LuArrowRight size={14} />
            <p className={`text-start text-xs text-gray-500 line-clamp-1`}>
              {item.match}
            </p>
          </div>
          {item.pinned ? (
            <LuPin size={16} fill="red" />
          ) : (
            <LuPinOff size={16} />
          )}
        </div>
        <div className="max-w-full flex flex-col items-start space-y-1">
          <p className="max-w-full text-sm font-semibold text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap">
            {item.email}
          </p>
          <p className="max-w-full text-xs font-semibold text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap">
            {item.subject}
          </p>
          <p
            className={`max-w-full text-xs text-start text-gray-900 text-ellipsis ${
              isExpanded ? "line-clamp-6" : "line-clamp-2"
            } `}
          >
            {item.body}
          </p>
        </div>
      </div>
    </li>
  );
};

export default GoldListItem;
