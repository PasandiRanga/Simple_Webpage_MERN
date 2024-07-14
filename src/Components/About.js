import React , {useContext} from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import './about.css'; // Custom styling
import History from './History';
import Team from './Team';
import Values from './Values';
import { ThemeContext } from '../Contexts/ThemeContext';

const About = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="about-container" style={{ background: theme === 'dark' ? '#333' : '#fff' }}>
            <h1 style={{color: theme === 'dark' ? '#fff' : '#000' }}>About Us</h1>
            <nav className="about-nav" >
                <NavLink to="history" className="nav-link" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>History</NavLink>
                <NavLink to="team" className="nav-link" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Team</NavLink>
                <NavLink to="values" className="nav-link" style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Values</NavLink>
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
