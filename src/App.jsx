import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/about";
import Achievements from "./components/achievements/achievements";
import Contact from "./components/contact/contact";
import DashBoard from "./components/dashboard/dashBoard";
import LiveBar from "./components/LiveBar/liveBar";
import Navbar from "./components/navBar";
import Playground from "./components/playground/playground";
import Slider from "./components/playground/slider";
import Rosters from "./components/rosters/rosters";
function App() {
  return (
    <div>
      <LiveBar />
      <main className="bg--gods">
        <Navbar />
      </main>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="rosters" element={<Rosters />}></Route>
        <Route path="achievements" element={<Achievements />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="playground" element={<Playground />}></Route>
        <Route path="slider" element={<Slider />}></Route>
      </Routes>
    </div>
  );
}

export default App;
