import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import GlitchEffect from '../components/GlitchEffect.jsx';

const Home = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const pageCount = parseInt(localStorage.getItem("count") || 0) + 1;
        localStorage.setItem("count", pageCount);
        setCount(pageCount);
    }, []);
    return (
        <>
      
        


            <div className='home-container'>
       
                {/* <div className='banner-container'> */}
                <div className="banner">
                    <Typewriter
                        options={{
                            strings: ['WELCOME', 'WELCOME TO MY WEBSITE'],
                            autoStart: true,
                            loop: true,
                        }} />
                </div>
                {/* </div> */}
                <div className='website-vistors'>

                    <h2>This site has had a total of <span><CountUp duration={5} className="counter" end={count} /> </span>visitors</h2>
                </div>
              
            </div>
   
    

           



          



        </>

    );
}
export default Home;