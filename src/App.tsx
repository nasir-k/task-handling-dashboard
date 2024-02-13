import React from "react";
import SideDrawer from "./components/SideDrawer";
import Dashboard from "./components/Dashboard";

const App: React.FC = () => {
  return (
    <SideDrawer>
      <Dashboard />
    </SideDrawer>
  );
};

export default App;
