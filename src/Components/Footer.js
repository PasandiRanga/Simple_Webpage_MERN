import React , { useContext} from 'react';
import './contact.css'; // Add your styles here
import { ThemeContext } from '../Contexts/ThemeContext';

const Footer = ({ address, phone, email }) => {

    const { theme } = useContext(ThemeContext);

    return (
        <footer className="footer" style={{ background: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
            <div className="contact-info">
                <h2 style={{ color: theme === 'dark' ? '#fff' : '#000' }}>Contact Details</h2>
                <p>Our Address: {address}</p>
                <p>Phone: {phone}</p>
                <p>Email: {email}</p>
            </div>
        </footer>
    );
};

export default Footer;
