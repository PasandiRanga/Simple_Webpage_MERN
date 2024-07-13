import React from 'react';
import './about.css';

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

const TeamMembers = () => (
    <div className="accordion-content">
        {teamMembers.map((member) => (
            <div key={member.id} className="team-member">
                <img src={member.picture} alt={member.name} className="team-member-image" />
                <div className="team-member-info">
                    <h3 className="team-member-name">{member.name}</h3>
                    <p className="team-member-description">{member.description}</p>
                </div>
            </div>
        ))}
    </div>
);

export default TeamMembers;
