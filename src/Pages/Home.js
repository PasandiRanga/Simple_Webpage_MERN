import React, { useState, useEffect } from 'react';
import './home.css';
import CurrentTime from '../Components/CurrentTime';
import WelcomeMessage from '../Components/WelcomeMessage';
import ImageSlider from '../Components/ImageSlider';

const Home = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        localStorage.setItem('name', inputValue);
    }, [inputValue]);

    useEffect(() => {
        document.title = "Home";
        console.log("Home component mounted or updated");
    }, []);

    const images = [
        'https://artra.lk/uploads/article/images/1590136685.jpg',
        'https://bmkltsly13vb.compat.objectstorage.ap-mumbai-1.oraclecloud.com/cdn.hitv.lk/media/images/image_bb6c920a1c.jpg',
        'https://tuktukdude.com/wp-content/uploads/2019/07/Untitled-design_6-2.png'
    ];

    return (
        <div className="hero-section">
            <div className="overlay">
                <WelcomeMessage academyName="Ranga Dance Academy" userName={inputValue} />
                <h2 className="subtitle">Experience the Art of Kandyan Dance</h2>
                <button className="join-button" onClick={() => alert('Join the Class! Please fill in the contact form')}>Join a Class</button>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="name-input"
                />
            </div>
            <ImageSlider images={images} interval={3000} />
            <div className="current-time-container">
                <CurrentTime />
            </div>
        </div>
    );
};

export default Home;
