import React from 'react';
import conteudomain from '../img/background-form1.png'
import Image from 'next/image';

const Main = () => {
    return (
            
            <div className='alinhar-conteudo'>
                <div className='conteudomain'>
                     <div className='texto1'>
            </div>
            <div className='imagemfundo'>
                <Image className='imagemain'
                src={conteudomain}
            />   
            </div>
        </div>   
    </div>

    )
}

export default Main;
