import React from 'react';
import { formatRelative } from 'date-fns'
import { ptBR} from 'date-fns/locale'

import './Comentario.css'
import imagemUsuario from './user.png'

//um componente é uma function, um componente pode rertornar apenas um único elemento no caso 1 <div>
//criando um componente, sempre começa com letra maiúscula
//criar um elemento que englobe todos os outros vazia ou qlqr elemento ex <> </>
/*const Comentario = () => {
    const num1 = 4;
    const num2 = 5;
   return <div className="Comentario">
        <div>Anaê:</div>
        <div>Olá, tudo bem? Eu sou um componente</div>
        <div>2 + 3 = {num1 + num2} </div> 
    </div> //html dentro do javascript = jsx
}; *///retorna apenas o codigo do componente, utilizar () e não {}= usar quando retornar elementos 
const Comentario = (props) => { //passando parâmetro props = objeto que vem com as propriedades do nosso elemento //Propriedades nao podem ser alteradas, são apenas read-only
    const estilo = { //criando elementos CSS no javascript
        color:'red',
        padding:'10px',
        fontSize: '30px'
    }
    return <div className="Comentario">
        <img class="avatar" src={imagemUsuario} alt={props.nome}/>
        <div class="conteudo">
            <h2 style={estilo}>{props.nome}</h2>
            <p class="email">{props.email}</p>
            <p class="mensagem">{props.children}</p> 
            <p class="data">{formatRelative(props.data, new Date(), {locale: ptBR})}</p>
            <button onClick={props.onRemove}>&times;</button>
        </div>
    </div> //html dentro do javascript = jsx //a msg é um elemento filho
}; //componentes que só possuem propriedades chamam de stateless components (componentes sem estado - componentes burros)
export default Comentario;