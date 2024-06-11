import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";

const Home = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        const pageCount = parseInt(localStorage.getItem("count") || 0) + 1;
        localStorage.setItem("count", pageCount);
        setCount(pageCount);
    }, []);
    return (
        <>
            
                <div className='banner-container'>
                    <div className="banner">
                        <Typewriter
                            options={{
                                strings: ['Welcome', 'Welcome to my website'],
                                autoStart: true,
                                loop: true,
                            }} />
                    </div>
                </div>
                <div className='website-vistors'>

                    <h2>This site has had a total of <span><CountUp duration={5} className="counter" end={count} /> </span>visitors</h2>
                </div>
         







        </>

    );
}
export default Home;