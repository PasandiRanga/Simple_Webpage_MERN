import React, { useState } from 'react';
import './about.css';

const Values = () => {
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    return (
        <div className="about-section">
            <h2>Our Values</h2>
            <div className="accordion">
                <div className="accordion-item">
                    <button onClick={() => toggleSection('core')} className="accordion-header">
                        Core Values
                    </button>
                    {openSection === 'core' && <CoreValues />}
                </div>
                <div className="accordion-item">
                    <button onClick={() => toggleSection('commitment')} className="accordion-header">
                        Commitment to Excellence
                    </button>
                    {openSection === 'commitment' && <Commitment />}
                </div>
            </div>
        </div>
    );
};

const CoreValues = () => (
    <div className="accordion-content">
        <ul>
            <li>Integrity</li>
            <li>Innovation</li>
            <li>Customer Focus</li>
            <li>Teamwork</li>
        </ul>
    </div>
);

const Commitment = () => (
    <div className="accordion-content">
        <p>Details about our commitment to excellence...</p>
    </div>
);

export default Values;
