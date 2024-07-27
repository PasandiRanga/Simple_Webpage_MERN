import React, { useState, useEffect } from 'react';
import './imageSlider.css';

const ImageSlider = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [fadeProp, setFadeProp] = useState({ fade: 'fade-in' });

    useEffect(() => {
        const timer = setInterval(() => {
            setFadeProp({ fade: 'fade-out' });
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setFadeProp({ fade: 'fade-in' });
            }, 500);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="image-slider">
            <img
                src={images[currentIndex]}
                alt="Slide"
                className={`slide-image ${fadeProp.fade}`}
            />
        </div>
    );
};

export default ImageSlider;
