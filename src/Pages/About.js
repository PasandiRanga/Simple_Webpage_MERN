import React, { useContext, useEffect } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './about.css';
import History from '../Components/History';
import Team from '../Components/Team';
import Values from '../Components/Values';
import { ThemeContext } from '../Contexts/ThemeContext';

const About = () => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        document.title = "About Us";
        console.log("About component mounted or updated");
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <div className="about-container">
            <h1 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>About Us</h1>
            <nav className="about-nav">
                <NavLink to="history" className="nav-link" activeClassName="active">History</NavLink>
                <NavLink to="team" className="nav-link" activeClassName="active">Team</NavLink>
                <NavLink to="values" className="nav-link" activeClassName="active">Values</NavLink>
            </nav>
            <Routes>
                {/* Default route to History */}
                <Route path="/" element={<Navigate to="history" />} />
                <Route path="history/*" element={<History />} />
                <Route path="team/*" element={<Team />} />
                <Route path="values/*" element={<Values />} />
            </Routes>
        </div>
    );
};

export default About;
