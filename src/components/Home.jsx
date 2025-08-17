import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';
import CountUp from "react-countup";
import GlitchEffect from '../components/GlitchEffect.jsx';

import WinHelp from './WindowsEffect.jsx';


const Home = () => {



    return (
        <>




            <div className='home-container'>
                <WinHelp title="C:\\Users\\Prateek\\left.txt" width={"25vw"} >

                    {/* Title-bar */}
                    <WinHelp title="C:\\Users\\Prateek\\welcome.txt" width={"48vw"} >
                        <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"57vw"} >
                            <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"32vw"} >
                                <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"72vw"} >
                                    <WinHelp title="C:\\Users\\Prateek\\right.txt" width={"95vw"} >

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