import React, { useState, useContext } from 'react';
import { useEffect } from 'react';
import '../Pages/about.css';
import TeamMembers from './TeamMembers';
import { ThemeContext } from '../Contexts/ThemeContext';

const Team = () => {
    const [openSection, setOpenSection] = useState('members');

    const { theme } = useContext(ThemeContext);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    useEffect(() => {
        document.title = "Team";
        console.log("Team component mounted or updated");
    }, []);

    useEffect(() => {
        setOpenSection('members');
    }, []);


    return (
        <div className="about-section">
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
        <div className={`accordion-content ${theme}`} >
            <p>Behind the success of Ranga Dance Academy is a dedicated and passionate team of individuals committed to upholding the legacy of 
            its founders. The academy is staffed with talented dance teachers who are proud alumni of G. Ranganath and Kamala Nayana Ranganath. 
            These educators not only possess a deep understanding of traditional and contemporary dance forms but also share a profound respect 
            for the rich heritage instilled by their mentors.<br/><br/>Each teacher brings unique expertise and creativity to the academy, ensuring that 
            students receive comprehensive training tailored to their individual needs. Their commitment to fostering a nurturing environment allows 
            students to explore their artistic potential while maintaining the high standards set by the founders.<br/><br/>In addition to the 
            teaching staff, a skilled managing team works tirelessly behind the scenes to ensure the smooth operation of the academy. This team 
            oversees various aspects, including curriculum development, student engagement, and event organization. Their efforts help create a 
            vibrant and supportive community that thrives on collaboration and shared passion for the arts.<br/><br/>Together, the teachers and 
            managing team embody the spirit of Ranga Dance Academy, ensuring that the legacy of G. Ranganath and Kamala Nayana Ranganath continues 
            to inspire future generations of dancers. Their collective dedication not only enriches the academy's programs but also solidifies its 
            reputation as a leading institution in the dance community.</p>
        </div>
    );
};

export default Team;
