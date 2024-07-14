import React, { useContext } from 'react';
import './about.css';
import { ThemeContext } from '../Contexts/ThemeContext';

const teamMembers = [
    {
        id: 1,
        name: 'John Doe',
        description: 'CEO & Founder',
        picture: 'john-doe.jpg',
    },
    {
        id: 2,
        name: 'Jane Smith',
        description: 'CTO',
        picture: 'jane-smith.jpg',
    },
    {
        id: 3,
        name: 'Alice Johnson',
        description: 'Project Manager',
        picture: 'alice-johnson.jpg',
    },
];

const TeamMembers = () => {
    const { theme } = useContext(ThemeContext); // Use the ThemeContext to get the current theme

    return (
        <div className="accordion-content" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            {teamMembers.map((member) => (
                <div key={member.id} className="team-member" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
                    <img src={member.picture} alt={member.name} className="team-member-image" />
                    <div className="team-member-info">
                        <h3 className="team-member-name">{member.name}</h3>
                        <p className="team-member-description">{member.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TeamMembers;
