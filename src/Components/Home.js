import React, { useState, useEffect } from 'react';
import './home.css';
import CurrentTime from './CurrentTime';
import WelcomeMessage from './WelcomeMessage';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        // Update local storage whenever the input value changes
        localStorage.setItem('name', inputValue);
    }, [inputValue]); // Dependency array

    return (
        <div className="hero-section">
            <div className="overlay">
                <WelcomeMessage academyName="Ranga Dance Academy" userName={inputValue} />
                <h2 className="subtitle">Experience the Art of Kandyan Dance</h2>
                <CurrentTime />
                <button className="join-button" onClick={() => alert('Join the Class!')}>Join a Class</button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="name-input"
                />
            </div>
        </div>
    );
};

export default Home;
