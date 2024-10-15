import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./assets/Pages/Home";
import AboutMe from "./assets/Pages/AboutMe";
import Contacts from "./assets/Pages/Contacts";
import "./App.css";
import Projects from "./assets/Pages/Projects";

const App: React.FC = () => {
  const [clickedLink, setClickedLinkState] = useState<string | null>(null);
  
  const linkStyle = (link: string) => {
    return {
      color: clickedLink === link ? '#F2707A' : 'brown',
      fontWeight: clickedLink === link ? 900 : 'bolder', 
    }
  }
  
  const handleLinkClick = (link: string) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    setClickedLinkState(link);
  };
    
  
  return (
    <Router>
      <div className="BarraNavegador_C">
          <nav className="BarraNavegador">
            <ul className="Links">
              <li>
                <Link to="/" style={linkStyle('/')} onClick={handleLinkClick('/')}>Home|</Link>
              </li>
              <li>
                <Link to="/about" style={linkStyle('/about')} onClick={handleLinkClick('/about')}>About Me|</Link>
              </li>
              <li>
                <Link to="/projects" style={linkStyle('/projects')} onClick={handleLinkClick('/projects')}>Projects|</Link>
              </li>
              <li>
                <Link to="/contact" style={linkStyle('/contact')} onClick={handleLinkClick('/contact')}>Contact|</Link>
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
    </Router>
    
  );
};

export default App;
