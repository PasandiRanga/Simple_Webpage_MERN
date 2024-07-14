import React, { useState, useContext } from 'react';
import './about.css';
import { ThemeContext } from '../Contexts/ThemeContext';

const Values = () => {
    const [openSection, setOpenSection] = useState(null);
    const { theme } = useContext(ThemeContext);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="about-section" style={{ background: theme === 'dark' ? '#4e4e4c' : '#FFD791' }}>
            <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Our Values</h2>
            <div className="accordion">
                <div className="accordion-item">
                    <button onClick={() => toggleSection('core')} className="accordion-header" >
                        Core Values
                    </button>
                    {openSection === 'core' && <CoreValues />}
                </div>
                <div className="accordion-item">
                    <button onClick={() => toggleSection('commitment')} className="accordion-header" >
                        Commitment to Excellence
                    </button>
                    {openSection === 'commitment' && <Commitment />}
                </div>
            </div>
        </div>
    );
};

const CoreValues = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="accordion-content" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <ul>
                <li>Integrity</li>
                <li>Innovation</li>
                <li>Customer Focus</li>
                <li>Teamwork</li>
            </ul>
        </div>
    );
};

const Commitment = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="accordion-content" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <p>Details about our commitment to excellence...</p>
        </div>
    );
};

export default Values;
