import React from "react";
import { LuPinOff, LuPin } from "react-icons/lu";

const GoldListItem = ({ item, isExpanded, onExpand }) => {
  return (
    <li
      key={item.email}
      className={`flex justify-between gap-x-6 px-3 py-5 hover:bg-slate-100/80 rounded-lg cursor-pointer ${
        isExpanded ? "h-64" : ""
      }`}
      onClick={() => onExpand(item.email)}
    >
      <div className="w-full flex flex-col items-start space-y-2">
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm font-bold text-gray-900 overflow-ellipsis line-clamp-1">
            {item.email}
          </p>
          {item.pinned ? (
            <LuPin size={16} fill="red" />
          ) : (
            <LuPinOff size={16} />
          )}
        </div>
        <p className="text-xs font-semibold text-gray-900 overflow-ellipsis line-clamp-1">
          {item.subject}
        </p>
        <p className="text-xs text-start text-gray-900 overflow-ellipsis line-clamp-2">
          {item.body}
        </p>
      </div>
    </li>
  );
};

export default GoldListItem;
