import React from 'react';
import Image from 'next/image';
import fundo from '../img/visaoverso-post.jpg'

const Banner = () => {
    return ( 
        <div className="banner-verso">
            <Image
            src={fundo}
            width={500}
            height={500}
            />    
        </div>
     );
}
 
export default Banner;