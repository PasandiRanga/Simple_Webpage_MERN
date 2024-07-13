import React from 'react';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './contact.css'; // Add your styles here

const Contact = () => {
    const contactDetails = {
        address: '312/2/H , Sooriyapaluwa , Kadawatha',
        phone: '0714399251',
        email: 'rangadance@gmail.com'
    };

    return (
        <div className="contact-container">
            <h1>Contact Us</h1>
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
