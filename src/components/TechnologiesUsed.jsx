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
import WinHelp from "./windowsEffect";

const TechnologiesUsed = () => {
    const imgSet1 = [{ img: cSvg }, { img: cssSvg}, { img: cudaSvg }, { img: djangoSvg }, { img: dockerSvg }];
    const imgSet2 = [{ img: gitSvg }, { img: htmlSvg}, { img: javaSvg }, { img: jspSvg }, { img: mysqlSvg }];
    const imgSet3 = [{ img: numpySvg }, { img: pandaSvg}, { img: phpSvg }, { img: tableauSvg }, { img: xamppSvg }];
    return (

        
            <WinHelp title="technologies.txt">
                <div className='flex flex-col p-6 space-y-2 overflow-hidden'>

            <h1 className="text-2xl  font-kindly tracking-wide mb-3 text-left text-[#0c148c] ">Frameworks</h1>
            <div className='text-base md:text-base tracking-wide mb-3 text-left' >
                <h5>Over the course of my academic career I have
                    come across various frameworks and languages. Some
                    of which that I am proficient at are listed below</h5>

            </div>
                <div className='space-y-5 p-10'>
                    

                        <Marquee autoFill pauseOnHover>
                            {imgSet1.map(ims => (
                            <img src={ims.img} alt='image of tech' className='w-20 h-10 m-3' />
                               )) }
                        </Marquee>
                
                    <Marquee autoFill direction='right' pauseOnHover>
                        {imgSet2.map(ims2 => (
                            <img src={ims2.img} alt='image of tech' className='w-20 h-10 m-3' />
                               )) }


                    </Marquee>
                    <Marquee autoFill pauseOnHover>
                        {imgSet3.map(ims3 => (
                            <img src={ims3.img} alt='image of tech' className='w-20 h-10 m-3' />
                               )) }
                    </Marquee>
                </div>
                </div>
            </WinHelp>

        

    );


}
export default TechnologiesUsed;