import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    return (
        <>


            <div className='center-container'>
                <div id='About'>
                    <h1> About Me</h1>


                    <div className='profile-container'>
                        <div className='profile-img'>
                            <a href={require('../assets/images/bg-1.jpg')}><img src={require('../assets/images/bg-1.jpg')} alt='An image of Prateek Balani' /></a>
                        </div>
                        <div className='profile-text'>
                            <h3>Lorem Ipsum is simply dummy text of the printing and
                                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                text ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book. It has survived not only
                                five centuries, but also the leap into electronic typesetting, remaining
                                essentially unchanged. It was popularised in the 1960s with the release of
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h3>
                        </div>
                    </div>
                </div>
            </div>


        </>


    );

}

export default About;