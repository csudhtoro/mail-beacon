import React from "react";
import GoldList from "./GoldList";
import NavTabs from "./NavTabs";
import Sort from "./Sort";
import Filters from "./Filters";
import History from "./History";
import Settings from "./Settings";

import CapacityIndicator from "./CapacityIndicator";

const Dashboard = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="p-2 w-full flex flex-col space-y-3">
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {activeTab === "Home" && (
          <div>
            <Sort />
            <GoldList />
            <CapacityIndicator />
          </div>
        )}
        {activeTab === "Filters" && <Filters />}
        {activeTab === "History" && <History />}
        {activeTab === "Settings" && <Settings />}
      </div>
    </>
  );
};

export default Dashboard;
