import "./App.css";
import "./index.css";
import DashboardHeader from "./Components/DashboardHeader";
import Dashboard from "./Components/Dashboard";
import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div
      className="bg-gray-100/70 flex flex-col items-center p-3 w-[420px] h-fit rounded-xl"
      style={{ fontFamily: "Parkinsans" }}
    >
      <DashboardHeader />
      <Dashboard activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default App;
