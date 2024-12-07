import React from "react";
import GoldList from "./GoldList";
import NavTabs from "./NavTabs";
import CapacityIndicator from "./CapacityIndicator";

const Dashboard = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div className="p-2 w-full flex flex-col space-y-2">
        <NavTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <GoldList />
        <div className="my-2">
          <CapacityIndicator />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
