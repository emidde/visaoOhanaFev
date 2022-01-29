import React from 'react';
import Image from 'next/image';
import logovisao from '../img/logovisao.png';


const Header = () => {
    return (
        <Image
        src={logovisao}
        height={130}
        width={250}
        />
    );
};

export default Header;