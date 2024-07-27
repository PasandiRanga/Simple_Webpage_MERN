import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ContactForm from '../Components/ContactForm';
import Footer from '../Components/Footer';
import './contact.css';
import { ThemeContext } from '../Contexts/ThemeContext';

const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const { detail } = useParams();

    useEffect(() => {
        document.title = "Contact";
        console.log("Contact component mounted or updated");
        document.documentElement.setAttribute('data-theme', theme); // Set the theme
    }, [theme]);

    const contactDetails = {
        address: '312/2/H, Sooriyapaluwa, Kadawatha',
        phone: '0714399251',
        email: 'rangadance@gmail.com'
    };

    let detailValue;
    switch(detail) {
        case 'address':
            detailValue = contactDetails.address;
            break;
        case 'phone':
            detailValue = contactDetails.phone;
            break;
        case 'email':
            detailValue = contactDetails.email;
            break;
        default:
            detailValue = null;
    }

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
            {detailValue ? (
                <p>{detailValue}</p>
            ) : (
                <>
                    <ContactForm />
                </>
            )}
            <Footer 
                address={contactDetails.address} 
                phone={contactDetails.phone} 
                email={contactDetails.email} 
            />
        </div>
    );
};

export default Contact;
