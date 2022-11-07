import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/about";
import Achievements from "./components/achievements/achievements";
import Contact from "./components/contact/contact";
import DashBoard from "./components/dashBoard";
import LiveBar from "./components/LiveBar/liveBar";
import Navbar from "./components/navBar";
import Rosters from "./components/rosters/rosters";
function App() {
  return (
    <div>
      <LiveBar />
      <section className="bg--gods">
        <Navbar />
        <DashBoard />
      </section>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="rosters" element={<Rosters />}></Route>
        <Route path="achievements" element={<Achievements />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
