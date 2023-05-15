import React from 'react';
import Tilt from 'react-parallax-tilt';
import image from './images/image.png';
import './Logo.css';

const Logo = () => {
    return (
        <Tilt className='Tilt br2 shadow-2' options={{max: 55}}>
            <div className='Tilt-inner' style={{ height: '200px'}}>
                <img className='mb4' alt = 'logo' src={require('./images/image.png')} style={{ height: '150px', width: '150px', justifyContent: 'center', margin: '25px'}} />
            </div>
        </Tilt>
    )
}

export default Logo;