import React, { useState, useContext, useEffect } from 'react';
import '../Pages/about.css';
import { ThemeContext } from '../Contexts/ThemeContext';

const Values = () => {
    const [openSection, setOpenSection] = useState('core');
    const { theme } = useContext(ThemeContext);

    const toggleSection = (section) => {
        setOpenSection(openSection === section ? null : section);
    };

    useEffect(() => {
        document.title = "Values";
        console.log("Values component mounted or updated");
    }, []);

    useEffect(() => {
        setOpenSection('core');
    }, []);

    return (
        <div className="about-section">
            <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Our Values</h2>
            <div className="accordion">
                <div className={`accordion-item ${theme}`}>
                    <button onClick={() => toggleSection('core')} className="accordion-header">
                        Core Values
                    </button>
                    {openSection === 'core' && <CoreValues />}
                </div>
                <div className={`accordion-item ${theme}`}>
                    <button onClick={() => toggleSection('commitment')} className="accordion-header">
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
        <div className={`accordion-content ${theme}`}>
            <div className="core-value-box">
                <h3>Passion for Dance</h3>
                <p>We cultivate a deep love for dance, encouraging students to express themselves and connect with the art form.</p>
            </div>
            <div className="core-value-box">
                <h3>Commitment to Excellence</h3>
                <p>We strive for the highest standards in training, performance, and education, fostering continuous growth and improvement.</p>
            </div>
            <div className="core-value-box">
                <h3>Respect for Tradition</h3>
                <p>We honor the rich cultural heritage of dance while embracing innovation, ensuring a well-rounded approach to learning.</p>
            </div>
            <div className="core-value-box">
                <h3>Inclusivity and Diversity</h3>
                <p>We welcome students of all backgrounds and skill levels, promoting a supportive and inclusive environment where everyone can thrive.</p>
            </div>
        </div>
    );
};

const Commitment = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`accordion-content ${theme}`}>
            <p>At Ranga Dance Academy, our commitment to excellence is at the core of our mission. We provide high-quality training through experienced instructors who offer personalized guidance, ensuring that each student can reach their full potential. Our meticulously designed curriculum covers a wide range of dance styles and techniques, continuously updated to reflect the latest trends and methodologies in the dance community.

We believe that practical experience is crucial for growth, which is why we offer numerous performance opportunities, competitions, and showcases. Regular feedback and assessments help students identify strengths and areas for improvement, fostering continuous progress. Additionally, we prioritize professional development for our instructors, encouraging them to participate in workshops and training sessions to stay current in the industry.

Collaboration is key to our success, creating a supportive environment where students and staff work together to achieve excellence. Our student-centered approach tailors programs to meet individual needs and aspirations, ensuring the best possible education and support. Through community engagement and partnerships, we further enhance our academy's reputation, solidifying our dedication to maintaining the highest standards in dance education.</p>
        </div>
    );
};

export default Values;
