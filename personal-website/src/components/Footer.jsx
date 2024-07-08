import React from "react";
import ContactButtons from "./ContactButton";
const Footer = () => {

    const redirectLink = (url) => {
        window.location.href = url;
    }
   return (
        <div className="footer-container">
            <div className="footer-text">
            <span style={{ fontFamily: "sans-serif" }}>© 2024 Prateek Balani All Rights Reserved</span>
           
            <span style={{ fontFamily: "sans-serif" }}>Made by Prateek Balani</span>
            </div>

            <div className="contacts-footer">
                <span style={{ fontFamily: "sans-serif" }}> Contact Me</span>
                <ContactButtons redirectLink={redirectLink} className="contact-footer" />
            </div>
            
        </div>
    );
};

export default Footer;
