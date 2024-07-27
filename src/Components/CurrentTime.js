import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        document.title = "Current Time";
        console.log("Current Time component mounted or updated");
    }, []);

    return <div>{currentTime}</div>;
};

export default CurrentTime;
