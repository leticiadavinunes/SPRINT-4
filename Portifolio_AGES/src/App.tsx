import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./home";
import AboutMe from "./AboutMe";
import Contacts from "./contacts";
import "./App.css";
import Projects from "./projects";

const App: React.FC = () => {
  return (
    <Router>
      <div className="BarraNavegador_C">
        <nav className="BarraNavegador">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
