import { useState, useEffect } from "react";

import gif1 from '../assets/images/tv-static.gif';
import gif2 from '../assets/images/glitch-1.gif';
import gif3 from '../assets/images/glitch-2.gif';
import gif4 from '../assets/images/glitch-3.gif';
import gif5 from '../assets/images/glitch-4.gif';


const gifs = [gif1, gif2, gif3, gif4, gif5];
const GlitchEffect = () => {
    const [listGifs, setListGifs] = useState(false);
    const [currentGif, setCurrentGif] = useState(gifs[0]);

    useEffect(() => {
        const gifOrder = setInterval(() => {
            const randomOrder = Math.floor(Math.random() * gifs.length);
            setCurrentGif(gifs[randomOrder]);
            setListGifs(true);

            setTimeout(() => {
                setListGifs(false);
            }, 500);

        }, 7000);

        return () => clearInterval(gifOrder);
    }, []);

    return (
        <div
            style={{
                backgroundColor: '#3014fc',
                width: '100%',
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                // zIndex: -1


            }}
        >

            {listGifs && (
                <img src={currentGif} alt="glitch" style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                   
                }}
                />
            )}
        </div>

    );
};

export default GlitchEffect;
