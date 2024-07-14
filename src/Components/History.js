import React, { useState, useEffect, useContext } from 'react';
import './about.css';
import { ThemeContext } from '../Contexts/ThemeContext';
import Founding from './Founding';
import Milestones from './Milestones';

const History = () => {
    const [openSection, setOpenSection] = useState('founding');
    const { theme } = useContext(ThemeContext);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    useEffect(() => {
        setOpenSection('founding');
    }, []);

    return (
        <div className="about-section" style={{ background: theme === 'dark' ? '#4e4e4c' : '#FFD791' }}>
            <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Our History</h2>
            <div className="accordion">
                <div className="accordion-item">
                    <button onClick={() => toggleSection('founding')} className="accordion-header">
                        Founding
                    </button>
                    {openSection === 'founding' && <Founding theme={theme} />}
                </div>
                <div className="accordion-item">
                    <button onClick={() => toggleSection('milestones')} className="accordion-header">
                        Milestones
                    </button>
                    {openSection === 'milestones' && <Milestones theme={theme} />}
                </div>
            </div>
        </div>
    );
};

export default History;
