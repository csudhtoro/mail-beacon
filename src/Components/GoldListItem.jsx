import React from "react";
import { LuClock, LuStar, LuReply, LuTrash2 } from "react-icons/lu";

const GoldListItem = ({ item, isExpanded, onExpand }) => {
  return (
    <li
      key={item.email}
      className={`bg-white h-fit flex justify-between p-2 rounded-lg shadow-md hover:border-slate-300 ${
        isExpanded ? "max-h-[265px] p-3 scale-105" : "max-h-[60px]"
      }`}
    >
      <div className="w-full flex flex-col justify-center items-start">
        <div
          className={` w-full flex justify-between items-center ${
            isExpanded
              ? "line-clamp-6 border-b border-slate-300"
              : "line-clamp-2"
          }`}
        >
          <div className="px-3 py-2 w-full flex justify-between items-center gap-3">
            <div
              className="flex justify-center items-center gap-2 cursor-pointer "
              onClick={() => onExpand(item.email)}
            >
              <img src={item.icon} alt={item.provider} className="w-6 h-6" />
              <div className="max-w-full flex flex-col items-start ">
                <p className="text-start text-sm font-medium text-gray-900 text-ellipsis overflow-hidden line-clamp-1">
                  {!isExpanded &&
                    (item.email.length > 32
                      ? item.email.slice(0, 32) + "..."
                      : item.email)}
                  {isExpanded &&
                    (item.email.length > 30
                      ? item.email.slice(0, 30) + "..."
                      : item.email)}
                </p>
                <div className="w-full text-xs text-gray-600 line-clamp-1 flex justify-between items-center">
                  <p className={`${isExpanded ? "block" : "hidden"}`}>
                    {item.received}
                  </p>
                  {/* <p className={`${isExpanded ? "block" : "hidden"}`}>
                    {item.match.length > 32
                      ? item.email.slice(0, 32) + "..."
                      : item.match}
                  </p> */}
                </div>
              </div>
            </div>
            <div className="cursor-pointer">
              {item.pinned ? (
                <LuStar size={14} />
              ) : (
                <LuStar size={14} stroke="black" fill="#facc15" />
              )}
            </div>
          </div>
        </div>
        <div
          className={`max-w-full flex flex-col items-start space-y-1 p-2 ${
            isExpanded ? "block" : "hidden"
          }`}
        >
          <p className="max-w-full text-xs font-medium text-gray-900 text-ellipsis overflow-hidden whitespace-nowrap">
            {item.subject}
          </p>
          <p
            className={`max-w-full text-xs text-start text-gray-900 text-ellipsis ${
              isExpanded ? "line-clamp-6" : "line-clamp-2"
            }`}
          >
            {item.body}
          </p>
        </div>
        <div
          className={`p-2 w-full text-gray-500 flex justify-start items-start gap-4 ${
            isExpanded ? "block border-t border-slate-300 py-2" : "hidden"
          }`}
        >
          <div className="w-full text-gray-600 flex justify-between items-center">
            <div className="text-gray-600 flex justify-center items-center gap-1">
              <LuClock size={16} />
              <p className="text-[0.60rem] font-semibold italic">
                Expiration: 2 Day(s)
              </p>
            </div>
            <button
              type="button"
              className="rounded-xl bg-white flex justify-center items-center gap-2 px-2 py-1 text-xs text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              <LuTrash2 size={16} fill="#fca5a5" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GoldListItem;
