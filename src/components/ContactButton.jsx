import React from "react";
import email_img from '../assets/images/email.svg' ;
import github_img from '../assets/images/github.svg' ;
import linkedin_img from '../assets/images/linkedin.svg' ;

const ContactButtons = ({ redirectLink, className }) => {
    return (
        <div className={`contact-buttons`}>
            <button id={className} onClick={() => redirectLink('mailto:prateekbalani03@gmail.com')}> <img src={email_img}/> </button>
            <button id={className} onClick={() => redirectLink('https://github.com/prateek-balani')}> <img src={github_img}/> </button>
            <button id={className} onClick={() => redirectLink('https://www.linkedin.com/in/prateek-balani/')}> <img src={linkedin_img}/> </button>
        </div>
    );
};

export default ContactButtons;