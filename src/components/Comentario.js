import React from 'react';
import './Comentario.css'

//um componente é uma function, um componente pode rertornar apenas um único elemento no caso 1 <div>
//criando um componente, sempre começa com letra maiúscula
//criar um elemento que englobe todos os outros vazia ou qlqr elemento ex <> </>
const Comentario = () => (
    <div className="Comentario">
        <div>Anaê:</div>
        <div>Olá, tudo bem? Eu sou um componente</div>
    </div> //html dentro do javascript = jsx
); //retorna apenas o codigo do componente, utilizar () e não {}

export default Comentario;