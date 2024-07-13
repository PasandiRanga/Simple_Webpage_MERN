import React, { useState } from 'react';
import './about.css';
import TeamMembers from './TeamMembers';

const Team = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="about-section">
            <h2>Our Team</h2>
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

const Leadership = () => (
    <div className="accordion-content">
        <p>Information about the leadership team...</p>
    </div>
);

export default Team;
