import React, { useState, useEffect } from 'react';
import './about.css';

const History = () => {
    const [openSection, setOpenSection] = useState('founding');

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    useEffect(() => {
        setOpenSection('founding');
    }, []);

    return (
        <div className="about-section">
            <h2>Our History</h2>
            <div className="accordion">
                <div className="accordion-item">
                    <button onClick={() => toggleSection('founding')} className="accordion-header">
                        Founding
                    </button>
                    {openSection === 'founding' && <Founding />}
                </div>
                <div className="accordion-item">
                    <button onClick={() => toggleSection('milestones')} className="accordion-header">
                        Milestones
                    </button>
                    {openSection === 'milestones' && <Milestones />}
                </div>
            </div>
        </div>
    );
};

const Founding = () => (
    <div className="accordion-content">
        <div className="founding-content">
            <img src="https://scontent.fcmb2-2.fna.fbcdn.net/v/t1.18169-1/12189063_899913230100856_6981209505211075988_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=e4545e&_nc_eui2=AeHiG487pd9bPsqJvktrgjtTUkOZEHDeajdSQ5kQcN5qN2mtATy5B4A-rXUF3U13ijreWxf4zoJblRQQDorqDaWI&_nc_ohc=rGcDGS4vcNQQ7kNvgGT__X3&_nc_ht=scontent.fcmb2-2.fna&oh=00_AYBQi_eXVpf0fHgafI9bEFS42L-oryqEuywkEBxzL6x_LA&oe=66BA310B" alt="Founder" className="founder-image" />
            <p>Details about the founding of the company...</p>
        </div>
    </div>
);

const Milestones = () => (
    <div className="accordion-content">
        <p>Details about key milestones achieved by the company...</p>
    </div>
);

export default History;
