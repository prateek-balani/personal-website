import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
    const disableRightClick = (event) => {
        event.preventDefault();
    };
    return (

        <>
        
      

           
                <div className='About'>
                    <h1> About Me</h1>

                   

                     <div className='profile-img' onContextMenu={disableRightClick}>
                          <img src={require('../assets/images/prateek.jpeg')} alt='An image of Prateek Balani' />
                        </div>
                         <h2>Prateek Balani</h2>


                    <div className='profile-container'>
                       
                        <div className='profile-text'>
                            <h4>I am currently in my fourth year pursuing a Bachelor of Science degree in Computer Science at 
                                <a href='https://www.ubc.ca' target="_blank"> The University of British Columbia, Okanagan Campus</a>. 
                                <br/><br/>
                                My academic journey has fostered a deep 
                                interest in software development and web development, particularly with a strong emphasis on backend 
                                development.
                                 <br/> <br/>
                                Throughout my studies, I have honed my skills in various programming languages and development 
                                frameworks, which has enabled me to build robust projects. I am passionate about creating 
                                efficient and reliable software solutions that can address complex problems. My coursework and projects have 
                                provided me with hands-on experience in database management, server-side logic, and API development.
                                 <br/> <br/>
                                 I am eager to continue expanding my knowledge and expertise in this field, and I look forward to contributing to innovative
                                 projects and connecting with like-minded professionals in the industry.
                                 <br/> <br/>
                                 Download my resume <a href={require('../assets/PrateekBalani_resume_2024 copy.pdf')} target="_blank" download>here</a>
                               
                            </h4>
                        </div>
                    </div>
                </div>
          


        </>


    );

}

export default About;