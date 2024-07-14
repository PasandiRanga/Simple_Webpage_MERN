import React , { useContext} from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './contact.css'; // Add your styles here
import { ThemeContext } from '../Contexts/ThemeContext';

const Contact = () => {

    const { theme } = useContext(ThemeContext);

    const contactDetails = {
        address: '312/2/H , Sooriyapaluwa , Kadawatha',
        phone: '0714399251',
        email: 'rangadance@gmail.com'
    };

    return (
        <div className="contact-container" style={{ background: theme === 'dark' ? '#4e4e4c' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }} >
            <h1 style={{color: theme === 'dark' ? '#fff' : '#000' }}>Contact Us</h1>
            <ContactForm />
            <Footer 
                address={contactDetails.address} 
                phone={contactDetails.phone} 
                email={contactDetails.email} 
            />
        </div>
    );
};

export default Contact;
