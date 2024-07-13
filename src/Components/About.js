import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './about.css'; // Custom styling
import History from './History';
import Team from './Team';
import Values from './Values';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <nav className="about-nav">
                <NavLink to="history" className="nav-link">History</NavLink>
                <NavLink to="team" className="nav-link">Team</NavLink>
                <NavLink to="values" className="nav-link">Values</NavLink>
            </nav>
            <Routes>
                <Route path="history/*" element={<History />} />
                <Route path="team/*" element={<Team />} />
                <Route path="values/*" element={<Values />} />
            </Routes>
        </div>
    );
};

export default About;
