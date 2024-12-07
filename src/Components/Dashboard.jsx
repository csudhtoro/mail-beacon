import React from "react";
import GoldList from "./GoldList";
import NavTabs from "./NavTabs";
import CapacityIndicator from "./CapacityIndicator";

const Dashboard = () => {
  return (
    <>
      <div className="p-2 w-full flex flex-col space-y-3">
        <NavTabs />
        <GoldList />
        <CapacityIndicator />
      </div>
    </>
  );
};

export default Dashboard;
