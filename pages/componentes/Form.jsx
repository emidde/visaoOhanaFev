import React from 'react';
import { useRouter } from 'next/router';



const Form = () => {
    const router = useRouter()
    return (
        <div className='form-inscricao'>
            <div className='texto2'>
            <p className='textomain2'>Preencha o formulário abaixo para participar :)</p>
            </div>
            <form className='formulario' action="https://docs.google.com/forms/d/e/1FAIpQLSdcWrzEh5DPQshxzNKhPaaQBH9628-6o5eYRQx3FsMOQJGdJQ/formResponse" 
            method="post">
            <div className="input-texto-form">
                <div className="alinhar-texto-form">
                <p>Nome completo</p>  
                </div>          
                <input type="text" name="entry.466410355" id="" required placeholder='nome' />
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Número do Whatsapp</p>  
                </div>             
                <input type="number" name="entry.537806754" id="" placeholder='Número do Whatsapp'  required/>
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Digite o seu Email</p>  
                </div>          
                <input type="text" name="entry.738120307" id="" required placeholder='Email' />
            </div>
            <div className="input-texto-form">
            <div className="alinhar-texto-form">
                <p>Qual a sua célula ?</p>  
                </div>           
                <select name="entry.1540066205" id="estado">
                <option value="Sou visitante">Sou visitante</option>
                <option value="Aile">Aile</option>
                <option value="Blessed">Blessed</option>
                <option value="Deep">Deep</option>
                <option value="Eternal">Eternal</option>
                <option value="Flower">Flower</option>
                <option value="Hadassa">Hadassa</option>
                <option value="Harvest">Harvest</option>
                <option value="Hope">Hope</option>
                <option value="Nobre">Nobre</option>
                <option value="Rock">Rock</option>
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
