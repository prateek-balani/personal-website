import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Marquee from "react-fast-marquee";
// import { faPython } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cSvg from '../assets/images/c.svg';
import cssSvg from '../assets/images/css.svg';
import cudaSvg from '../assets/images/cuda.svg';
import djangoSvg from '../assets/images/django.svg';
import dockerSvg from '../assets/images/docker.svg';
import gitSvg from '../assets/images/git.svg';
import htmlSvg from '../assets/images/html5.svg';
import javaSvg from '../assets/images/java.svg';
import jspSvg from '../assets/images/jsp.svg';
import mysqlSvg from '../assets/images/mysql.svg';
import numpySvg from '../assets/images/numpy.svg';
import pandaSvg from '../assets/images/pandas.svg';
import phpSvg from '../assets/images/php.svg';
import pythonSvg from '../assets/images/python.svg';
// import sqlSvg from '../assets/images/sql-1-1.svg';
import tableauSvg from '../assets/images/tableau.svg';
import xamppSvg from '../assets/images/xampp.svg';


const Framework = () => {
    return (
        <>
            <div className='outer-framework-container'>
                <h1>Frameworks</h1>
                <div className='framework-text' >
                    <h5>Over the course of my academic career I have
                        come across various frameworks and languages. Some
                        of which that I am proficient at are listed below</h5>

                </div>
                <div className='framework-container'>

                    <Marquee autoFill pauseOnHover>
                        <img src={cSvg} alt='c svg' className='marquee-img' />
                        <img src={cssSvg} alt='css svg' className='marquee-img' />
                        <img src={cudaSvg} alt='cuda svg' className='marquee-img' />
                        <img src={djangoSvg} alt='django svg' className='marquee-img' />
                        <img src={dockerSvg} alt='docker svg' className='marquee-img' />


                    </Marquee>
                    <Marquee autoFill direction='right' pauseOnHover>
                        <img src={gitSvg} alt='git svg' className='marquee-img' />
                        <img src={htmlSvg} alt='html svg' className='marquee-img' />
                        <img src={javaSvg} alt='java svg' className='marquee-img' />
                        <img src={jspSvg} alt='jsp svg' className='marquee-img' />
                        <img src={mysqlSvg} alt='mysql svg' className='marquee-img' />


                    </Marquee>
                    <Marquee autoFill pauseOnHover>
                        <img src={numpySvg} alt='numpy svg' className='marquee-img' />
                        <img src={pandaSvg} alt='panda svg' className='marquee-img' />
                        <img src={phpSvg} alt='php svg' className='marquee-img' />
                        <img src={pythonSvg} alt='python svg' className='marquee-img' />
                        <img src={tableauSvg} alt='tableau svg' className='marquee-img' />
                        <img src={xamppSvg} alt='xampp svg' className='marquee-img' />
                    </Marquee>
                </div>

            </div>

        </>

    );



}

export default Framework;
