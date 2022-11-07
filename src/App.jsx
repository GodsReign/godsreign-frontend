import React from "react";
import "./App.css";
import LiveBar from "./components/LiveBar/liveBar";
import DashBoard from "./components/dashBoard";

function App() {
  return (
    <div>
      <LiveBar />
      <DashBoard />
    </div>
  );
}

export default App;
