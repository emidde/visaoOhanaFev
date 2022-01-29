import React from 'react';
import Image from 'next/image';
import logovisao from '../img/logovisao.png'
import fevereiro from '../img/fevereiro.jpeg'
const ConteudoOhana = () => {
    return(
        <div className="conteudo-ohana">
        <div className='texto-ohana' >
                   <p>E para o mês de fevereiro teremos o Ohana,
            não deixe de participar!
        </p> 
        </div>

        <div className="ohanavisao">
        <Image
        src={logovisao}
        width={300}
        height={150}
        />
        </div>
        <div className="fevereiro">
        <Image
        src={fevereiro}
        />
        </div>

        </div>
    )
}

export default ConteudoOhana;