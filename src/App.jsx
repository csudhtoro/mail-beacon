import "./App.css";
import "./index.css";
import DashboardHeader from "./Components/DashboardHeader";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div
      className="flex flex-col items-center space-y-3 p-4 w-[400px] h-[600px] rounded-xl"
      style={{ fontFamily: "Parkinsans" }}
    >
      <DashboardHeader />
      <Dashboard />
    </div>
  );
}

export default App;
