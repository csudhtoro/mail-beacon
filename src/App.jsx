import "./App.css";
import "./index.css";
import DashboardHeader from "./Components/DashboardHeader";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div
      className="bg-gradient-to-bl from-indigo-100/80 to-white w-[400px]"
      style={{ fontFamily: "Inter" }}
    >
      <div className="flex flex-col items-center">
        <DashboardHeader />
        <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
}

export default App;
