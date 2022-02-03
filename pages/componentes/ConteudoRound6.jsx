import React from 'react';
import Image from 'next/image';
import imglouvor from '../imgR6/imglouvor.jpg'
import imglouvor2 from '../imgR6/imglouvor2.jpg'
import imglideranca from '../imgR6/imglideranca.jpg'
import imgrecepcao from '../imgR6/imgrecepcao.jpg'
import imgrecepcao2 from '../imgR6/imgrecepcao2.jpg'
import imgteatro from '../imgR6/imgteatro.jpg'
import banner from '../imgR6/imground6.png'
 
const ConteudoRound6 = () => {
    return (
    <div className="conteudo-evento-round-6">
        <div className="texto-conteudo-round-6">
            <p>Esse foi um dos nossos últimos eventos</p>
        </div>
        <div className="conteudo-imagem-texto-round-6">
             <div className="banner-round-6">
                <div className="texto-banner">
                    <p className="texto-banner">Veja como foi o Round 6</p>
                </div>
            <div className="imagem-banner-round-6">
                <Image className='imagemain'
                src={banner}
                />
            </div>
        </div>
        </div>
        <div className="background-color-round-6">
        <div className="texto-conteudo-round-6">
        <p>O seu jogo começa aqui</p>
        </div>
        <div className="imagens-round-6">
            <div className="conteudo-das-imagens">
            <Image src={imgrecepcao}
            width={450}
            height={350}
            />
            <p>A recepção</p>
            </div>
            <div className="conteudo-das-imagens">
            <Image src={imglouvor}
            width={450}
            height={350}
            />
            <p>Momento de adoração</p>
            </div>
            <div className="conteudo-das-imagens">
            <Image src={imgrecepcao2}
            width={450}
            height={350}
            />
            <p>Foto com os participanetes</p>
            </div>
            <div className="conteudo-das-imagens">
            <Image src={imglideranca}
            width={450}
            height={350}
            />
            <p>Apresentação dos novos líderes</p>
            </div>
            <div className="conteudo-das-imagens">
            <Image src={imglouvor2}
            width={450}
            height={350}
            />
            <p>Momento de adoração</p>
            </div>
            <div className="conteudo-das-imagens">
            <Image src={imgteatro}
            width={450}
            height={350}
            />
            <p>Teatro com o tema Round 6</p>
            </div>
        </div>
        </div>
        <div className="background-limpo">
        </div>
    </div>    
     );
};
 
export default ConteudoRound6;
