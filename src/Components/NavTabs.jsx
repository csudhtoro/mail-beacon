import React from "react";

const tabs = [
  { name: "Home", href: "#", current: true },
  { name: "Filters", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavTabs = () => {
  return (
    <nav
      aria-label="Tabs"
      className="bg-slate-100/80 flex justify-between items-center p-2 rounded-lg"
    >
      {tabs.map((tab) => (
        <a
          key={tab.name}
          href={tab.href}
          aria-current={tab.current ? "page" : undefined}
          className={classNames(
            tab.current
              ? "bg-white text-gray-900 font-semibold"
              : "text-gray-600 hover:text-gray-800",
            "rounded-lg px-6 py-2 text-sm font-medium"
          )}
        >
          {tab.name}
        </a>
      ))}
    </nav>
  );
};

export default NavTabs;
