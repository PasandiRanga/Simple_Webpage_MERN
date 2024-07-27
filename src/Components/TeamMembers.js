import React, { useContext } from 'react';
import '../Pages/about.css';
import { ThemeContext } from '../Contexts/ThemeContext';

const teamMembers = [
    {
        id: 1,
        name: 'Mohanji Ranganath',
        description: 'Director',
        picture: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    },
    {
        id: 2,
        name: 'Anusha Salwathura',
        description: 'Deputy Director',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc9azdZMAx3x9fUNNPq2oSShzhAg1PZkKIJ7UHqfORrX0uS0ws69unxSmd9jG7Wtmmldo&usqp=CAU',
    },
    {
        id: 3,
        name: 'Asandi Ranganath',
        description: 'Manager',
        picture: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png',
    },
];

const TeamMembers = () => {
    const { theme } = useContext(ThemeContext); // Use the ThemeContext to get the current theme

    return (
        <div className={`accordion-content ${theme}`}>
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
