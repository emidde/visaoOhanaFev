import React from 'react';

const Form = () => {
    return (
        <div className='form-inscricao'>
            <div className='texto2'>
            <p className='textomain2'>A sua festa começa preenchendo este formulário abaixo</p>
            </div>
            <form className='formulario' action="" method="post">
            <div className="input-texto-form">
                <div className="alinhar-texto-form">
                <p>Nome</p>  
                </div>          
                <input type="text" name="" id="" required placeholder='nome' />
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Sobrenome</p>  
                </div>           
                <input type="text" name="" id="" required placeholder='Sobrenome' />
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Número do Whatsapp</p>  
                </div>             
                <input type="number" name="" id="" placeholder='Número do Whatsapp'  required/>
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Digite o seu Email</p>  
                </div>          
                <input type="text" name="" id="" required placeholder='Email' />
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Qual a sua célula ?</p>  
                </div>           
                <select name="" id="estado">
                <option value="">Sou visitante</option>
                <option value="">Aile</option>
                <option value="">Blessed</option>
                <option value="">Deep</option>
                <option value="">Eternal</option>
                <option value="">Flower</option>
                <option value="">Freedom</option>
                <option value="">Hadassa</option>
                <option value="">Hope</option>
                <option value="">Nobre</option>
                <option value="">Rock</option>
                </select>
            </div>
            <div className='Button'>
            <button>
                <a type='submit'>
                    Quero participar!
                </a>
            </button>
            </div>
            </form>
        </div>
    )
}

export default Form;

