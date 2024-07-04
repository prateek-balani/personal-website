import { Button } from "bootstrap";
import React from "react";
import email_img from '../assets/images/email.svg' ;
import github_img from '../assets/images/github.svg' ;
import linkedin_img from '../assets/images/linkedin.svg' ;
import { Link, redirect } from 'react-router-dom';

const ContactMe = () => {
    const redirectLink = (url) =>{
        window.location.href = url ;
    }


    return(
        <>
        <div className="contact-container">
       <h1>Any Inquiries? Reach Out!</h1>
       <div className="contact-buttons">

        <button id="contact-button" onClick={() => redirectLink('mailto:prateekbalani03@gmail.com')}> <img src={email_img}/> </button>
         <button id="contact-button" onClick={() => redirectLink('https://github.com/prateek-balani')}> <img src={github_img}/> </button>
          <button id="contact-button" onClick={() => redirectLink('https://www.linkedin.com/in/prateek-balani/')}> <img src={linkedin_img}/> </button>

       </div>

       </div>
        </>

    );
}
export default ContactMe ;