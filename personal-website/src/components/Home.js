import React from 'react';
import Typewriter from 'typewriter-effect';
const Home = () => {
    return (
    
            <div className="banner">
                <Typewriter
                    options={{
                        strings: ['Welcome', 'Welcome to', 'Welcome to my', 'Welcome to my website'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </div>
    
    );
}
export default Home;