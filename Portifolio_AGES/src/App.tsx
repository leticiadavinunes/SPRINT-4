import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./assets/Pages/Home";
import AboutMe from "./assets/Pages/AboutMe";
import Contacts from "./assets/Pages/Contacts";
import Projects from "./assets/Pages/Projects";
import "./App.css";

const App: React.FC = () => {
  const [clickedLink, setClickedLinkState] = useState<string | null>(null);

  const linkStyle = (link: string) => ({
    color: clickedLink === link ? '#F2707A' : 'brown',
    fontWeight: clickedLink === link ? 900 : 'bolder',
    marginRight: '10px', 
    fontSize: '25px',
  });

  const handleLinkClick = (link: string) => () => {
    setClickedLinkState(link);
  };

  const barraStyle = {
    width: '100vw',
    height: '120px',
    boxSizing: 'border-box' as const,
    backgroundColor: '#E6F5E8',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    display: 'flex',
    borderRadius: '6px',
    border: '10px solid #C3E6D4',
  };

  const linksStyle = {
    display: 'flex',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  };

  return (
    <Router>
      <nav style={barraStyle}>
        <div style={linksStyle}>
          <Link to="/" style={linkStyle('/')} onClick={handleLinkClick('/')}>Home|</Link>
          <Link to="/about-me" style={linkStyle('/about-me')} onClick={handleLinkClick('/about-me')}>About Me|</Link>
          <Link to="/contacts" style={linkStyle('/contacts')} onClick={handleLinkClick('/contacts')}>Contacts|</Link>
          <Link to="/projects" style={linkStyle('/projects')} onClick={handleLinkClick('/projects')}>Projects|</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;