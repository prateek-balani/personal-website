import React from "react";
import ContactButtons from "./ContactButton";
const Footer = () => {

    const redirectLink = (url) => {
        window.location.href = url;
    }
   return (
        <div className="footer-container">
            <div className="footer-text">
            <h7 style={{ fontFamily: "sans-serif" }}>© 2024 All Rights Reserved</h7>
            <br/>
           
            <h7 style={{ fontFamily: "sans-serif" }}>Made by Prateek Balani</h7>
            </div>

            <div className="contacts-footer">
                <h7 style={{ fontFamily: "sans-serif" }}> Contact Me</h7>
                <ContactButtons redirectLink={redirectLink} className="contact-footer" />
            </div>
            
        </div>
    );
};

export default Footer;
