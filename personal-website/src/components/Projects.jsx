import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Projects = () => {
    return (
        <>
            <div className='Projects'>
                <h1> Projects</h1>

                <div className='project-container'>
                    <div className='project' id='proj1'>
                        <a href="https://github.com/ubco-W2022T2-data301/project-group29">
                            <img src={require('../assets/images/data-analytics-1.webp')} />
                            <div className='img-caption'>
                                <h4>Gen Z vs Gen X</h4>
                            </div>
                        </a>
                        <div className='img-text'>
                            Conducted an analysis of Spotify’s 
                            data on the music listening habits of Generation Z 
                            and Generation X, discovering intriguing differences and patterns

                        </div>

                    </div>

                    <div className='project' id='proj2'>
                        <a href="https://github.com/patrickma6199/Pondr">
                            <img src={require('../assets/images/pondr-2.webp')} />
                            <div className='img-caption'>
                                <h4>Pondr</h4>
                            </div>
                        </a>
                        <div className='img-text'>
                            Developed Pondr, a discussion forum website inspired by Reddit and HackerNews, in a 3-person group project for a Web Development class

                        </div>


                    </div>

                    <div className='project' id='proj3'>

                        <a href="https://github.com/olivernicholass/TIXX">
                            <img src={require('../assets/images/tixx-3.webp')} />
                            <div className='img-caption'>
                               <h4>Tixx</h4>
                            </div>
                        </a>
                        <div className='img-text'>
                            Developed Tixx, a web application for event organization and attendance, in a 5-person team for a Software Engineering class using the Django framework

                        </div>



                    </div>


                    <div className='project' id='proj4'>
                        <a href="https://github.com/prateek-balani/107-frogs-store">
                            <img src={require('../assets/images/frogs-4.webp')} />
                            <div className='img-caption'>
                                <h4>107 Frogs</h4>
                            </div>
                        </a>
                        <div className='img-text'>
                            Developed a web store for selling frogs in a 2-person group project for a Databases (DBMS) class

                        </div>

                    </div>

                </div>
            </div>



        </>

    );
}

export default Projects;