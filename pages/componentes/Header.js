import React from 'react';
import Image from 'next/image';
import logovisao from '../img/logotipo.png';


const Header = () => {
    return (
        <Image
        src={logovisao}
        height={80}
        width={190}
        />
    );
};

export default Header;
