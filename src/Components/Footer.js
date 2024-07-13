import React from 'react';
import './contact.css'; // Add your styles here

const Footer = ({ address, phone, email }) => {
    return (
        <footer className="footer">
            <div className="contact-info">
                <h2>Contact Details</h2>
                <p>Our Address: {address}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </footer>
    );
};

export default Footer;
