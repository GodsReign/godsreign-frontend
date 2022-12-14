import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/about/about";
import Achievements from "./components/achievements/achievements";
import Contact from "./components/contact/contact";
import DashBoard from "./components/dashboard/dashBoard";
import LiveBar from "./components/LiveBar/liveBar";
import NavBar from "./components/navbar/navBar";
import Playground from "./components/playground/playground";

import Rosters from "./components/rosters/rosters";
import Footer from "./components/footer/Footer";
import Navbar from "react-bootstrap/Navbar";
function App() {
  return (
    <div>
      <Navbar sticky="top" className="top-sticky">
        <section className="bg-greyscale tw-w-full">
          <LiveBar />
        </section>
        <section className="nav--background tw-w-full">
          <NavBar />
        </section>
      </Navbar>
      <Routes>
        <Route path="/" element={<DashBoard />}></Route>
        <Route path="rosters" element={<Rosters />}></Route>
        <Route path="achievements" element={<Achievements />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="playground" element={<Playground />}></Route>
      </Routes>
      <section className="tw-mt-36">
        <div className="footer-hr"></div>
        <footer className="footer--greyscale">
          <Footer />
        </footer>
      </section>
    </div>
  );
}

export default App;
