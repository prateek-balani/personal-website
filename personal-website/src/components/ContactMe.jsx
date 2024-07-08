import { Button } from "bootstrap";
import React from "react";
import email_img from '../assets/images/email.svg' ;
import github_img from '../assets/images/github.svg' ;
import linkedin_img from '../assets/images/linkedin.svg' ;
import ContactButtons from "./ContactButton";
const ContactMe = () => {
    const redirectLink = (url) =>{
        window.location.href = url ;
    }


    return(
        <>
        <div className="contact-container">
       <h1>Any Inquiries? Reach Out!</h1>
       <div className="contact-buttons">
       <ContactButtons redirectLink={redirectLink} className="contact-button" />
       </div>

       </div>
        </>

    );
}
export default ContactMe ;