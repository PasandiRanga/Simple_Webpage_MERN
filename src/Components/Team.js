import React, { useState, useContext } from 'react';
import './about.css';
import TeamMembers from './TeamMembers';
import { ThemeContext } from '../Contexts/ThemeContext';

const Team = () => {
    const [openSection, setOpenSection] = useState(null);

    const { theme } = useContext(ThemeContext);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="about-section" style={{ background: theme === 'dark' ? '#4e4e4c' : '#FFD791' }}>
            <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Our Team</h2>
            <div className="accordion">
                <div className="accordion-item">
                    <button onClick={() => toggleSection('members')} className="accordion-header">
                        Team Members
                    </button>
                    {openSection === 'members' && <TeamMembers />}
                </div>
                <div className="accordion-item">
                    <button onClick={() => toggleSection('leadership')} className="accordion-header">
                        Leadership
                    </button>
                    {openSection === 'leadership' && <Leadership />}
                </div>
            </div>
        </div>
    );
};

const Leadership = () => {
    const { theme } = useContext(ThemeContext); // Use the ThemeContext to get the current theme

    return (
        <div className="accordion-content" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <p>Information about the leadership team...</p>
        </div>
    );
};

export default Team;
