import React from 'react';
import './about.css';

const Milestones = ({ theme }) => (
    <div className="accordion-content" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
        <p>Details about key milestones achieved by the company...</p>
    </div>
);

export default Milestones;
