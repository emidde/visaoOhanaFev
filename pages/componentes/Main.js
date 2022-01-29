import React from 'react';
import conteudomain from '../img/conteudomain.png'
import Image from 'next/image';

const Main = () => {
    return (
            
            <div className='alinhar-conteudo'>
                <div className='conteudomain'>
                     <div className='texto1'>
                         <p> Seja bem vindo ao Ohana.
                        </p>
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