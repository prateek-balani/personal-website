import { useState, useEffect } from "react";

import gif1 from '../assets/images/tv-static.gif';
import gif2 from '../assets/images/glitch-1.gif';
import gif3 from '../assets/images/glitch-2.gif';
import gif4 from '../assets/images/glitch-3.gif';
import gif5 from '../assets/images/glitch-4.gif';

const gifs = [gif1, gif2, gif3, gif4, gif5];

const GlitchEffect = ({children}) => {
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
        <div style={{ position: 'relative' }}>
            {listGifs && (
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '160%',
                    backgroundImage: `url(${currentGif})`,
                    backgroundSize: 'cover',
                    zIndex: -1,
                    pointerEvents: 'none', 
                    marginBottom: '10rem', 
                }} />
            )}
            <div style={{ position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default GlitchEffect;
