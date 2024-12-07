import React from "react";

const tabs = [
  { name: "Home", href: "#", current: true },
  { name: "Filters", href: "#", current: false },
  { name: "History", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavTabs = ({ activeTab, setActiveTab }) => {
  return (
    <nav
      aria-label="Tabs"
      className="flex justify-between items-center border-b border-gray-200"
    >
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          aria-current={tab.current ? "page" : undefined}
          className={classNames(
            tab.name === activeTab
              ? "border-gray-900 text-gray-900 font-bold"
              : "border-transparent text-gray-400 hover:border-gray-400",
            "w-1/4 border-b-2 px-1 py-4 text-center text-sm font-medium"
          )}
          onClick={() => setActiveTab(tab.name)}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};

export default NavTabs;
