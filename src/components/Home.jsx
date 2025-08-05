import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import GlitchEffect from '../components/GlitchEffect.jsx';
import '98.css';

const WinHelp = ({ title, children, width }) => (

    <div className="window" style={{ width, margin: '0 8px' }}>
        <div className="title-bar">
            <div className="title-bar-text">{title}</div>
            <div className="title-bar-controls">
                <button aria-label="Minimize" />
                <button aria-label="Maximize" />
                <button aria-label="Close" />
            </div>
        </div>

        <div className="window-body" style={{ textAlign: 'center' }}>
            {children}
        </div>
    </div>
);
const Home = () => {



    return (
        <>




            <div className='home-container'>
                <WinHelp title="C:\\Users\\Prateek\\left.txt" width={320} >

                    {/* Title-bar */}
                    <WinHelp title="C:\\Users\\Prateek\\welcome.txt" width={480} >
                        <WinHelp title="C:\\Users\\Prateek\\right.txt" width={570} >
                            <WinHelp title="C:\\Users\\Prateek\\right.txt" width={320} >
                                <WinHelp title="C:\\Users\\Prateek\\right.txt" width={720} >
                                    <WinHelp title="C:\\Users\\Prateek\\right.txt" width={1080} >

                                        <div className="window-body" style={{ textAlign: 'center' }}>
                                            <div className="banner" >
                                                <Typewriter
                                                    options={{
                                                        strings: ['WELCOME', 'WELCOME TO MY WEBSITE'],
                                                        autoStart: true,
                                                        loop: true,
                                                    }} />
                                            </div>
                                        </div>
                                    </WinHelp>
                                </WinHelp>
                            </WinHelp>
                        </WinHelp>


                    </WinHelp>

                </WinHelp>

            </div>










        </>

    );
}

export default Home;