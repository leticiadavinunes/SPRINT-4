import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  
  return (
    <Router>

        <div>
            <nav>
              <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/aboutMe">About me</Link>
                  </li>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                    <Link to="/contacts" >Contacts</Link>
                  </li>
              </ul>
            </nav>

            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/aboutMe' element={<AboutMe />}/>
                <Route path='/projects' element={<Projects />}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
        </div>
    
    </Router>
  )
  
}

export default App
