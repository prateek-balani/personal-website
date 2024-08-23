import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import GlitchEffect from '../components/GlitchEffect.jsx';

const Home = () => {


    return (
        <>
      
        


            <div className='home-container'>
       
         
                <div className="banner">
                    <Typewriter
                        options={{
                            strings: ['WELCOME', 'WELCOME TO MY WEBSITE'],
                            autoStart: true,
                            loop: true,
                        }} />
                </div>
          
              
              
            </div>
   
    

           



          



        </>

    );
}
export default Home;