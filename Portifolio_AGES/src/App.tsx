import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import "./App.css";
import Projects from "./Projects";

const App: React.FC = () => {
  return (
    <Router>
      <div className="BarraNavegador_C">
        <div className="Teste">
          <nav className="BarraNavegador">
            <ul className="Links">
              <li>
                <Link to="/">Home|</Link>
              </li>
              <li>
                <Link to="/about">About Me|</Link>
              </li>
              <li>
                <Link to="/projects">Projects|</Link>
              </li>
              <li>
                <Link to="/contact">Contact|</Link>
              </li>
            </ul>
          </nav>
        </div>
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
