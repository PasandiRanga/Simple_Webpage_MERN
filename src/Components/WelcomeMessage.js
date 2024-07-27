import React from 'react';
import PropTypes from 'prop-types';
import '../Pages/home.css';

const WelcomeMessage = ({ academyName, userName }) => {
    const getWelcomeMessage = () => {
        const hour = new Date().getHours();
        if (hour < 12) {
            return `Good Morning! Welcome to ${academyName}`;
        } else if (hour < 18) {
            return `Good Afternoon! Welcome to ${academyName}`;
        } else {
            return `Good Evening! Welcome to ${academyName}`;
        }
    };

    return (
        <h1 className="welcome-message">
            {userName ? `Welcome, ${userName}` : getWelcomeMessage()}
        </h1>
    );
};

WelcomeMessage.propTypes = {
    academyName: PropTypes.string.isRequired,
    userName: PropTypes.string,
};

WelcomeMessage.defaultProps = {
    userName: '',
};

export default WelcomeMessage;
