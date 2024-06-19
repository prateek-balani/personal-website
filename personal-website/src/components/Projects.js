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
            <div id='Projects'>
                <h1> Projects</h1>
                <div className='center-container'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <a href="https://github.com/ubco-W2022T2-data301/project-group29">
                                <img src={require('../assets/images/data-analytics-1.png')} />
                                <div className='img-caption'>
                                    Data Analysis on Spotify data - Gen Z vs Gen X what is their music taste like?
                                </div>
                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://github.com/patrickma6199/Pondr">
                                <img src={require('../assets/images/pondr-2.png')} />
                                <div className='img-caption'>
                                    Pondr - A new social media
                                </div>

                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://github.com/olivernicholass/TIXX">
                                <img src={require('../assets/images/tixx-3.png')} />
                                <div className='img-caption'>
                                    Tixx - Events made easy
                                </div>

                            </a>
                        </SwiperSlide>
                        <SwiperSlide>
                            <a href="https://github.com/prateek-balani/107-frogs-store">
                                <img src={require('../assets/images/frogs-4.png')} />
                                <div className='img-caption'>
                                    107 Frogs - Exotic Frogs on the go
                                </div>
                            </a>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>



        </>

    );
}

export default Projects;




