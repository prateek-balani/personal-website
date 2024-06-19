import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation  } from 'swiper/modules';

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
                        <SwiperSlide><a href="https://github.com/ubco-W2022T2-data301/project-group29"> <img src={require('../assets/images/data-analytics.jpg')} /></a></SwiperSlide>
                        <SwiperSlide><a href="https://github.com/patrickma6199/Pondr"> <img src={require('../assets/images/pondr-3.jpg')} /></a></SwiperSlide>
                        <SwiperSlide><a href="https://github.com/patrickma6199/Pondr"> <img src={require('../assets/images/tixx.jpg')} /></a></SwiperSlide>

                    </Swiper>
                </div>
            </div>



        </>

    );
}

export default Projects;




